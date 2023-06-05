import { Request, Response, NextFunction } from 'express';

export async function loginRequired(request: Request, response: Response, next: NextFunction) {
  const { username, password } = request.body;

  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }
  return next();
}

export async function loginValidation(request: Request, response: Response, next: NextFunction) {
  const { username, password } = request.body;

  if (username !== '') {
    return response.status(401).json({ message: 'Username or password invalid' });
  }

  if (password !== '') {
    return response.status(401).json({ message: 'Username or password invalid' });
  }
  return next();
}