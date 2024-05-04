import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ["/api/webhooks/clerk"],
    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"]
  });

export const config={
    matcher:["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};