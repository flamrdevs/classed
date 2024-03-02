type CXLike = (...args: any[]) => string;

type ClassedClassValue = string | false | null | undefined;

const cx = ((...args: ClassedClassValue[]): string => {
  let result = "",
    arg: any;
  for (arg of args) if (typeof arg === "string" && arg) result && (result += " "), (result += arg);
  return result;
}) satisfies CXLike;

export type { CXLike };
export { cx };
