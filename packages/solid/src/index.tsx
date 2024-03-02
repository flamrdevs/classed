import { Dynamic } from "solid-js/web";
import type { JSX } from "solid-js";

import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

import type { SupportedComponentProps, SupportedElementType, Classes } from "./types";

type WithCXValueProps<T, P extends {}> = Omit<P, Classes> & Partial<Record<Classes, T>>;

type ClassedComponent<ET extends SupportedElementType, CXValue> = {
  (props: WithCXValueProps<CXValue, SupportedComponentProps<ET>>): JSX.Element;
};

const create = <CX extends CXLike>({ cx }: { cx: CX }) => {
  type CXValue = Parameters<CX>[number];
  return <ET extends SupportedElementType>(Element: ET, ...classes: CXValue[]) => {
    return ((props) => {
      return <Dynamic component={Element} {...(props as any)} class={cx(...classes, props.class, props.classList)} />;
    }) as ClassedComponent<ET, CXValue>;
  };
};

const classed = create({ cx });

export { create };
export default classed;
