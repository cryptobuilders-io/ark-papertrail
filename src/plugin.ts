import { defaults } from "./defaults";
import { PapertrailConnection, PapertrailTransport } from "winston-papertrail";
import { FgCyan, FgRed, FgYellow, Reset } from "./colors";

export const plugin = {
  pkg: require("../package.json"),
  defaults,
  async register(container, options) {
    const logger = container.resolvePlugin('logger')
    logger.info(`[PAPERTRAIL] Broadcasting logs to ${options.host}:${options.port}`);

    try {
      const driver = container.resolvePlugin("logManager").driver();

      if (!options.logFormat) {
        options.colorize = options.colorize || true;
        options.logFormat = (level, message) => {
          let line = `[${level.toUpperCase()}] ${message}`;

          if (level === 'debug') {
            line = `${FgCyan}${line}${Reset}`;
          } else if (level === 'warn') {
            line = `${FgYellow}${line}${Reset}`;
          } else if (level === 'error') {
            line = `${FgRed}${line}${Reset}`;
          }

          return line;
        }
      }

      options.connection = options.connection || new PapertrailConnection(options);
      driver.logger.add(new PapertrailTransport(options));
    } catch (e) {
      logger.error(e.message);
    }
  }
};
