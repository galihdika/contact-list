import { rest } from "msw"

import { users } from "./data";

import { User } from "../../lib/types/user";

export const getUsers = () => {
  return rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<User[]>(users),
    )
  });
}