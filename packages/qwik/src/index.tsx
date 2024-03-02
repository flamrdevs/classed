import { isSignal, jsx } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";

import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

import type { Signalish, SupportedComponentProps, SupportedElementType, Classes } from "./types";

const maybeSignal = <T extends any = any>(obj: any): obj is T => (isSignal<any>(obj) ? obj.value : obj);

const safeSpread = <P extends { [key: PropertyKey]: any }>(props: P) => {
  let result: Record<string, any> = {},
    key: string;
  for (key in props) result[key] = maybeSignal(props[key]);
  return result;
};

type WithCXValueProps<T, P extends {}> = Omit<P, Classes> & Partial<Record<Classes, Signalish<T>>>;

type ClassedComponent<ET extends SupportedElementType, CXValue> = {
  (props: WithCXValueProps<CXValue, SupportedComponentProps<ET>>): JSX.Element;
};

const create = <CX extends CXLike>({ cx }: { cx: CX }) => {
  type CXValue = Parameters<CX>[number];
  return <ET extends SupportedElementType>(Element: ET, ...classes: CXValue[]) => {
    return ((props) => {
      return jsx(Element, { ...(safeSpread(props) as any), class: cx(...classes, maybeSignal(props.class)) });
    }) as ClassedComponent<ET, CXValue>;
  };
};

const classed = create({ cx });

export { create };
export default classed;
