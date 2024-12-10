import { onRequest as ____path___ts_onRequest } from "D:\\GitHub\\remix_cf_pages_templ\\functions\\[[path]].ts"

export const routes = [
    {
      routePath: "/:path*",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [____path___ts_onRequest],
    },
  ]