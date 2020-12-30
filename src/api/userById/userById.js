import prisma from "../../util";

export default {
  Query: {
    userById: (_, args) => {
      const { id } = args;
      return prisma.user({ id });
    },
  },
};
