import loginModel from '../models/loginModel';

export default async function userLogin(username: string, password: string) {
  const newLogin = await loginModel(username, password);
  return newLogin;
}