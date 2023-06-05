import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default async function loginModel(username: string, password: string) {
  const query = 'SELECT * FROM Trybesmith.users WHERE username= (?) AND password= (?)';
  const [result] = await connection.execute(query, [username, password]);
  const [userResult] = result as RowDataPacket[];
  return userResult;
}