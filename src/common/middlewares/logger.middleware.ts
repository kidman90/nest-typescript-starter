import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
  resolve(name: string): ExpressMiddleware {
    return (req, res, next) => {
      req.user = { roles: ['admin'] };
      console.log(`[${name}] Request...`); // [ApplicationModule] Request...
      next();
    };
  }
}
