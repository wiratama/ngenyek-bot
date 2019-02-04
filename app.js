import 'babel-polyfill';
import path from 'path';
import express from 'express';``
import bodyParser from 'body-parser';
import createError from 'http-errors';
import session from 'express-session';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import lusca from 'lusca';
import logger from 'morgan';
import hbs from 'express-handlebars';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import config from './config';

const ngenyekBot = express();
const currentEnv = process.env.NODE_ENV;

// view engine setup
ngenyekBot.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'mainlayout', // 'testlayout', 'mainlayout',
  layoutsDir: __dirname + '/resources/views/layouts/',
}));
ngenyekBot.set('views', path.join(__dirname, './resources'));
ngenyekBot.set('view engine', 'hbs');
ngenyekBot.use('/static', express.static(path.join(__dirname, 'public')));

ngenyekBot.response.message = function(msg){
  let sess = this.req.session;

  sess.messages = sess.messages || [];
  sess.messages.push(msg);
  
  return this
}

// log
ngenyekBot.use(logger('dev'));

// serve static files
ngenyekBot.use(express.static(path.join(__dirname, 'public')));

// session support
ngenyekBot.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config[currentEnv].session_secret,
  cookie: { secure: config[currentEnv].secure_cookie, maxAge: config[currentEnv].cookie_expires },
}));

// headers
ngenyekBot.use(cors());
ngenyekBot.use(helmet());
ngenyekBot.use(compression());

// prevent clickjacking and cross site scripting
ngenyekBot.use(lusca.xframe(config[currentEnv].xframe_option));
ngenyekBot.use(lusca.xssProtection(config[currentEnv].xss_protection));

// disable x-powered-by
ngenyekBot.set('x-powered-by', false);
ngenyekBot.set('case sensitive routing', true);

// parse request bodies (req.body)
ngenyekBot.use(express.urlencoded({ extended: true }));

// allow overriding methods in query (?_method=put)
ngenyekBot.use(methodOverride('_method'));

// expose the "messages" local variable when views are rendered
ngenyekBot.use(function(req, res, next){
  let msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !! msgs.length;
  next();
  req.session.messages = [];
});

// catch 404 and forward to error handler
ngenyekBot.use(function(req, res, next) {
  next(createError(404));
});

// error handler
ngenyekBot.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render(path.join(__dirname, './resources/views/errors/error'), {layout: 'errorlayout'});
});


// bot section
import TelegramBot from 'node-telegram-bot-api';
const token = '795756780:AAGhviOnmfklTMxUGlJlo7WJZiomHK0vcP8';
const bot = new TelegramBot(token, {polling: true});
const enyekList = [
  'bgst!',
  'naskleng!',
  'kampret!',
  'taek!',
  'kamfang!',
  'babi koe!'
];
let _renderEnyek;

_renderEnyek = enyekList[Math.floor(Math.random()*enyekList.length)];
bot.onText(/\/ngenyek (.+)/, (msg, match) => {
  let resp = match[1];
  
  if(resp=='cuk')
    bot.sendMessage(msg.chat.id, _renderEnyek);
});

export default ngenyekBot;