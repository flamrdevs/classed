import { component$, useComputed$, useSignal } from "@builder.io/qwik";

import { cx } from "@classed/utils";

import clsx from "clsx";

import classed, { create } from "../src";

const classedx = create({ cx: clsx });

export const ClassedButton = classed("button", "button");

export const ClassedxButton = classedx("button", ["button"]);

export const ClassedButtonReactive = component$(() => {
  const classes = useSignal<string | null>(null);

  return (
    <ClassedButton
      data-testid="reactive"
      class={cx("extra", "classes", classes.value)}
      onClick$={() => {
        classes.value = "reactive";
      }}
    >
      children
    </ClassedButton>
  );
});
export const ClassedButtonSignalReactive = component$(() => {
  const classes = useSignal<string | null>(null);
  const className = useComputed$(() => cx("extra", "classes", classes.value));

  return (
    <ClassedButton
      data-testid="reactive"
      class={className}
      onClick$={() => {
        classes.value = "reactive";
      }}
    >
      children
    </ClassedButton>
  );
});
