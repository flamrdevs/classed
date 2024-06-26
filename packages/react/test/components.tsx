import { Component, forwardRef } from "react";
import type { JSX, PropsWithoutRef } from "react";

export const A = forwardRef<HTMLAnchorElement, PropsWithoutRef<JSX.IntrinsicElements["a"]>>((props, ref) => <a ref={ref} {...props} />);
export const Button = forwardRef<HTMLButtonElement, PropsWithoutRef<JSX.IntrinsicElements["button"]>>((props, ref) => <button ref={ref} {...props} />);
export const Div = forwardRef<HTMLDivElement, PropsWithoutRef<JSX.IntrinsicElements["div"]>>((props, ref) => <div ref={ref} {...props} />);

type WithRequiredProps<P> = Omit<P, "id"> & { id: string };

export const RequiredA = forwardRef<HTMLAnchorElement, WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["a"]>>>((props, ref) => <a ref={ref} {...props} />);
export const RequiredButton = forwardRef<HTMLButtonElement, WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["button"]>>>((props, ref) => <button ref={ref} {...props} />);
export const RequiredDiv = forwardRef<HTMLDivElement, WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["div"]>>>((props, ref) => <div ref={ref} {...props} />);

export class ClassAWithoutRef extends Component<WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["a"]>>> {
  render() {
    return <a {...this.props} />;
  }
}
export class ClassButtonWithoutRef extends Component<WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["button"]>>> {
  render() {
    return <button {...this.props} />;
  }
}
export class ClassDivWithoutRef extends Component<WithRequiredProps<PropsWithoutRef<JSX.IntrinsicElements["div"]>>> {
  render() {
    return <div {...this.props} />;
  }
}
