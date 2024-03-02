import { useState } from "preact/hooks";
import { computed, useSignal } from "@preact/signals";

import { cx } from "@classed/utils";

import clsx from "clsx";

import classed, { create } from "../src";

const classedx = create({ cx: clsx });

export const ClassedButton = classed("button", "button");

export const ClassedxButton = classedx("button", ["button"]);

export const ClassedButtonReactive = () => {
  const [classes, setClasses] = useState<string | null>(null);

  return (
    <ClassedButton
      data-testid="reactive"
      class={cx("extra", "classes", classes)}
      onClick={() => {
        setClasses("reactive");
      }}
    >
      children
    </ClassedButton>
  );
};
export const ClassedButtonSignalReactive = () => {
  const classes = useSignal<string | null>(null);
  const className = computed(() => cx("extra", "classes", classes.value));

  return (
    <ClassedButton
      data-testid="reactive"
      class={className}
      onClick={() => {
        classes.value = "reactive";
      }}
    >
      children
    </ClassedButton>
  );
};
