import { createInnerTRPCContext } from "../../../server/api/context";
import { appRouter } from "../../../server/api/root";


export const getAllPermissions = async () => {
  const ctx = await createInnerTRPCContext({ session: null });
  const caller = appRouter.createCaller(ctx);
  const permissions = await caller.role.getAllPermissions();
  return permissions;
}