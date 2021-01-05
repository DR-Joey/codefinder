import prisma from "../../util";

export default {
  Query: {
    codeByCode: (_, args) => {
      const { code } = args;
      return prisma.code.findUnique({ where: { code } });
    },
  },
};
