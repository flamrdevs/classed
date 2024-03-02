import { defineComponent, h } from "vue";
import type { JSX } from "vue/jsx-runtime";

import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

import type { SupportedComponentProps, SupportedElementType, Classes, BaseComponent } from "./types";

const defaultComponentOptions = {
  props: ["class"] as any,
  inheritAttrs: false,
};

type WithCXValueProps<T, P extends {}> = Omit<P, Classes> & Partial<Record<Classes, T>>;

type ClassedComponent<ET extends SupportedElementType, CXValue> = {
  (props: WithCXValueProps<CXValue, SupportedComponentProps<ET>>): JSX.Element;
} & BaseComponent;

const create = <CX extends CXLike>({ cx }: { cx: CX }) => {
  type CXValue = Parameters<CX>[number];
  return <ET extends SupportedElementType>(Element: ET, ...classes: CXValue[]) => {
    return defineComponent((props, { attrs, slots }) => {
      return () => h(Element, { ...(attrs as any), class: cx(...classes, props.class) }, slots);
    }, defaultComponentOptions) as unknown as ClassedComponent<ET, CXValue>;
  };
};

const classed = create({ cx });

export { create };
export default classed;
