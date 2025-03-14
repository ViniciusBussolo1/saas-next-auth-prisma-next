import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
  email: string;
  name: string;
  password?: string;
};

export async function findUserByCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const userValid = compareSync(password, user.password);

  if (userValid) {
    return { email: user.email, name: user.name };
  }

  return null;
}
