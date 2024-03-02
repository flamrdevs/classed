import { defineComponent, ref } from "vue";

import { cx } from "@classed/utils";

import clsx from "clsx";

import classed, { create } from "../src";

const classedx = create({ cx: clsx });

export const ClassedButton = classed("button", "button");

export const ClassedxButton = classedx("button", ["button"]);

export const ClassedButtonReactive = defineComponent(() => {
  const classes = ref<string | null>(null);

  return () => (
    <ClassedButton
      data-testid="reactive"
      class={cx("extra", "classes", classes.value)}
      onClick={() => {
        classes.value = "reactive";
      }}
    >
      children
    </ClassedButton>
  );
});
