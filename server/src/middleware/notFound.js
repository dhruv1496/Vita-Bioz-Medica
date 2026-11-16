import { NotFoundError } from './errorHandler.js';

export function notFound(req, res, next) {
  next(new NotFoundError(`Cannot ${req.method} ${req.originalUrl}`));
}