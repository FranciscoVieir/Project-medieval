import { Request, Response } from 'express';
import userLogin from '../Service/serviceLogin';
import createTokenAuth from '../Jwt/jwtConfig';

export default async function createANewLogin(request: Request, response: Response) {
  const { username, password } = request.body;

  await userLogin(username, password);

  const token = createTokenAuth(request.body);

  return response.status(200).json({ token });
}