declare module "next" {
  interface RouteHandlerContext {
    params: Record<string, string>;
  }
}