
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const roleRouter = createTRPCRouter({
  getAllPermissions: publicProcedure.query(({ ctx }) => {
    console.log(ctx); // Issue: context got undefined, and below query throws error.
    debugger
    //Note: schema is not updated with permissions table so commented out below query.
    //const permissions = ctx.prisma.permissions.findMany({where: { roleId: ctx.user.id}})
    //return permissions;
    return 'users,other';
  }),
});
