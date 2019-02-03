const config = {
    development: {
        app_port: 'app_port',
        mongohost: 'mongohost',
		mongoport: 'mongoport',
		mongousername: 'mongousername',
		mongopassword: 'mongopassword',
		mongocollection: 'mongopassword',
        
        session_secret: 'session_secret',
        http_only: true,
		secure_cookie: true,
		cookie_expires: 12000,
		xframe_option: 'SAMEORIGIN',
		xss_protection: true,
		case_sensitive_routing: true,
        
        public_path: 'public_path',
        backend_theme: 'basetheme',
        frontend_theme: 'frontend_theme'
    },
    staging: {
        app_port: 'app_port',
        mongohost: 'mongohost',
		mongoport: 'mongoport',
		mongousername: 'mongousername',
        mongopassword: 'mongopassword',
        mongocollection: 'mongopassword',
        
        session_secret: 'session_secret',
        http_only: 'http_only',
        secure_cookie: 'secure_cookie',
        cookie_expires: 'cookie_expires',
        xframe_option: 'xframe_option',
        xss_protection: 'xss_protection',
        case_sensitive_routing: 'case_sensitive_routing',
        
        public_path: 'public_path',
        backend_theme: 'active_theme',
        frontend_theme: 'frontend_theme'
    },
    production: {
        app_port: 'app_port',
        mongohost: 'mongohost',
		mongoport: 'mongoport',
		mongousername: 'mongousername',
        mongopassword: 'mongopassword',
        mongocollection: 'mongocollection',
        
        session_secret: 'session_secret',
        http_only: 'http_only',
        secure_cookie: 'secure_cookie',
        cookie_expires: 'cookie_expires',
        xframe_option: 'xframe_option',
        xss_protection: 'xss_protection',
        case_sensitive_routing: 'case_sensitive_routing',
        
        public_path: 'public_path',
        backend_theme: 'active_theme',
        frontend_theme: 'frontend_theme'
    }
}

export default config;