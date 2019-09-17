export const asyncMiddleware = (fn:  Function) =>
  (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };