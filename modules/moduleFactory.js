import express from 'express';
import path from 'path';
import fsextra from 'fs-extra';

export default (parent, options) => class ModuleFactory {
    constructor() {
        const modulesDirectory = './modules';
        fsextra.readdirSync(modulesDirectory).forEach(function(directory) {
            let file = path.join(modulesDirectory, directory);
            if (!fsextra.statSync(file).isDirectory()) return;

            let obj = require('./'+directory);
            parent.use(obj['default']['routes']);
        });
    }
}
