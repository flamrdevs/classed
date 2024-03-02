import { useState } from "react";

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
      className={cx("extra", "classes", classes)}
      onClick={() => {
        setClasses("reactive");
      }}
    >
      children
    </ClassedButton>
  );
};
