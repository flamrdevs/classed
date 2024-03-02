import { createSignal } from "solid-js";

import { cx } from "@classed/utils";

import clsx from "clsx";

import classed, { create } from "../src";

const classedx = create({ cx: clsx });

export const ClassedButton = classed("button", "button");

export const ClassedxButton = classedx("button", ["button"]);

export const ClassedButtonReactive = () => {
  const [classes, setClasses] = createSignal<string | null>(null);

  return (
    <ClassedButton
      data-testid="reactive"
      class={cx("extra", "classes", classes())}
      onClick={() => {
        setClasses("reactive");
      }}
    >
      children
    </ClassedButton>
  );
};
