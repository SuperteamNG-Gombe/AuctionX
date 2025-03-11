export class AppError extends Error {
  statusCode: number;
  details?: any;

  constructor(statusCode: number, message: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
