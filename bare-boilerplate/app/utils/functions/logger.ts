type Log = unknown[];

export const logger = {
  debug(...args: Log) {
    if (__DEV__) {
      const date = new Date().toLocaleTimeString();
      Array.prototype.unshift.call(args, `[${date}] ⚡⚡⚡ `);
      console.log(...args); // eslint-disable-line no-console
    }
  },

  error(...args: Log) {
    if (__DEV__) {
      console.error(...args); // eslint-disable-line no-console
    }
  },

  log(...args: Log) {
    if (__DEV__) {
      const date = new Date().toLocaleTimeString();
      Array.prototype.unshift.call(args, `[${date}]`);
      console.log(...args); // eslint-disable-line no-console
    }
  },

  prettyLog(...args: Log) {
    if (__DEV__) {
      const allArgs = Array.prototype.slice.call(args).map((argument) => {
        try {
          if (typeof argument === "object") {
            return JSON.stringify(argument, null, 2);
          }
          return argument;
        } catch {
          return argument;
        }
      });
      console.log(allArgs.length > 0 ? allArgs : allArgs[0]); // eslint-disable-line no-console
    }
  },
  warn(...args: Log) {
    if (__DEV__) {
      console.warn(...args); // eslint-disable-line no-console
    }
  },
};
