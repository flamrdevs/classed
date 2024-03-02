import React from "react";
import type { JSX } from "react";

import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

import type { SupportedComponentProps, SupportedElementType, Classes, BaseComponent } from "./types";

type WithCXValueProps<T, P extends {}> = Omit<P, Classes> & Partial<Record<Classes, T>>;

type ClassedComponent<ET extends SupportedElementType, CXValue> = {
  (props: WithCXValueProps<CXValue, SupportedComponentProps<ET>>): JSX.Element;
} & BaseComponent;

const create = <CX extends CXLike>({ cx }: { cx: CX }) => {
  type CXValue = Parameters<CX>[number];
  return <ET extends SupportedElementType>(Element: ET, ...classes: CXValue[]) => {
    return React.forwardRef<any, any>((props, ref) => {
      return <Element ref={ref} {...(props as any)} className={cx(...classes, props.className)} />;
    }) as unknown as ClassedComponent<ET, CXValue>;
  };
};

const classed = create({ cx });

export { create };
export default classed;
