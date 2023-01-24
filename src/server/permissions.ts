import { prisma } from "./db";

export const getPermissionsByUser = async (userId: string) => {
  const permissions = await prisma.permission.findMany({
    where: {
      userId,
    },
  });
  return permissions;
};
