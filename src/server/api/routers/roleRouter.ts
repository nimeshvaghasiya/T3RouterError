import { createTRPCRouter, protectedProcedure } from "../trpc";
import { getPermissionsByUser } from "../../permissions";

export const roleRouter = createTRPCRouter({
  usersPermissions: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx); // Issue: context got undefined, and below query throws error.
    const permissions = await getPermissionsByUser(ctx.session.user.id);
    return permissions;
  }),
});
