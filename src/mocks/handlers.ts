import { getAvatar } from "./avatar/avatarHandler";
import { getUsers } from "./user/userHandler";

import { singleUser } from "./user/data";

export const handlers = [
  getAvatar(singleUser.username),
  getUsers(),
];