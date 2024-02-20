type CXLike = (...args: any[]) => string;

const cx = ((...args: (string | false | null | undefined)[]) => {
  let result = "",
    arg: any;
  for (arg of args) if (typeof arg === "string" && arg) result && (result += " "), (result += arg);
  return result;
}) satisfies CXLike;

export type { CXLike };
export { cx };
