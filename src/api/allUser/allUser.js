import prisma from "../../util";

export default {
  Query: {
    allUsers: () => prisma.findMany(),
  },
};
