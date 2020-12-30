import { nanoid } from "nanoid";
import prisma from "../../util";

export default {
  Mutation: {
    createUser: async (_, args) => {
      const { username, email } = args;
      const id = nanoid();
      const user = await prisma.user.create({
        data: {
          username,
          email,
        },
      });
      return user;
    },
  },
};
