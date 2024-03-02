import type { JSX } from "preact";

import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

import type { SupportedComponentProps, SupportedElementType, Classes, BaseComponent } from "./types";

const isSignal = <T extends any>(obj: any): obj is JSX.SignalLike<T> => obj !== null && typeof obj === "object" && obj.brand === Symbol.for("preact-signals");

const maybeSignal = <T extends any = any>(obj: any): obj is T => (isSignal<any>(obj) ? obj.value : obj);

type WithCXValueProps<T, P extends {}> = Omit<P, Classes> & Partial<Record<Classes, JSX.Signalish<T>>>;

type ClassedComponent<ET extends SupportedElementType, CXValue> = {
  (props: WithCXValueProps<CXValue, SupportedComponentProps<ET>>): JSX.Element;
} & BaseComponent;

const create = <CX extends CXLike>({ cx }: { cx: CX }) => {
  type CXValue = Parameters<CX>[number];
  return <ET extends SupportedElementType>(Element: ET, ...classes: CXValue[]) => {
    return ((props) => {
      return <Element {...(props as any)} class={cx(...classes, maybeSignal(props.class) ?? maybeSignal(props.className))} />;
    }) as ClassedComponent<ET, CXValue>;
  };
};

const classed = create({ cx });

export { create };
export default classed;
