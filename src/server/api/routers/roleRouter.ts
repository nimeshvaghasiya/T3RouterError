import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const roleRouter = createTRPCRouter({
  getAllPermissions: publicProcedure.query(() => {
    return 'users,other';
  }),
});
