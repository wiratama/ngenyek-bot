export const routerMap = (originalFunction) => {
    return (req, res, next) => {
        try {
            return originalFunction.call(this, req, res, next);
        } catch (e) {
            return next(e);
        }
    };
};

export function getConfig(key, defaultValue) {
    if (cfg[key] === undefined) {
      return defaultValue;
    }
  
    return cfg[key];
}