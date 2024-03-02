import { describe, it } from "vitest";

import type { JSXOutput } from "@builder.io/qwik";

import * as expects from "./expects";

import { render } from "./testing-library";

import classed from "../src";

import { A, Button, Div, RequiredA, RequiredButton, RequiredDiv } from "./components";

const PROPS = {
  "data-testid": "root",
};

describe("classed", () => {
  const expect = async (ui: JSXOutput) => expects.element((await render(ui)).getByTestId(PROPS["data-testid"]));

  it("A", async () => {
    const Component = classed(A, "class");
    (await expect(<Component {...PROPS} />)).tagName("A");
  });

  it("Button", async () => {
    const Component = classed(Button, "class");
    (await expect(<Component {...PROPS} />)).tagName("BUTTON");
  });

  it("Div", async () => {
    const Component = classed(Div, "class");
    (await expect(<Component {...PROPS} />)).tagName("DIV");
  });

  describe("required", () => {
    it("A", async () => {
      const Component = classed(RequiredA, "class");
      (await expect(<Component {...PROPS} id="id" />)).tagName("A");
    });

    it("Button", async () => {
      const Component = classed(RequiredButton, "class");
      (await expect(<Component {...PROPS} id="id" />)).tagName("BUTTON");
    });

    it("Div", async () => {
      const Component = classed(RequiredDiv, "class");
      (await expect(<Component {...PROPS} id="id" />)).tagName("DIV");
    });
  });
});
