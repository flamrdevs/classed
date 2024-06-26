import { component$ } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";

export const A = (props: JSX.IntrinsicElements["a"]) => <a {...props} />;
export const Button = (props: JSX.IntrinsicElements["button"]) => <button {...props} />;
export const Div = (props: JSX.IntrinsicElements["div"]) => <div {...props} />;

export const A$ = component$<JSX.IntrinsicElements["a"]>((props) => <a {...props} />);
export const Button$ = component$<JSX.IntrinsicElements["button"]>((props) => <button {...props} />);
export const Div$ = component$<JSX.IntrinsicElements["div"]>((props) => <div {...props} />);

type WithRequiredProps<P> = Omit<P, "id"> & { id: string };

export const RequiredA = (props: WithRequiredProps<JSX.IntrinsicElements["a"]>) => <a {...props} />;
export const RequiredButton = (props: WithRequiredProps<JSX.IntrinsicElements["button"]>) => <button {...props} />;
export const RequiredDiv = (props: WithRequiredProps<JSX.IntrinsicElements["div"]>) => <div {...props} />;
