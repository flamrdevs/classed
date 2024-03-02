import { describe, it } from "vitest";

import type { ReactElement } from "react";

import { render } from "@testing-library/react";

import * as expects from "./expects";

import classed from "../src";

import { A, Button, Div, RequiredA, RequiredButton, RequiredDiv } from "./components";

const PROPS = {
  "data-testid": "root",
};

describe("classed", () => {
  const expect = (ui: ReactElement) => expects.element(render(ui).getByTestId(PROPS["data-testid"]));

  it("A", () => {
    const Component = classed(A, "class");
    expect(<Component {...PROPS} />).tagName("A");
  });

  it("Button", () => {
    const Component = classed(Button, "class");
    expect(<Component {...PROPS} />).tagName("BUTTON");
  });

  it("Div", () => {
    const Component = classed(Div, "class");
    expect(<Component {...PROPS} />).tagName("DIV");
  });

  describe("required", () => {
    it("A", () => {
      const Component = classed(RequiredA, "class");
      expect(<Component {...PROPS} id="id" />).tagName("A");
    });

    it("Button", () => {
      const Component = classed(RequiredButton, "class");
      expect(<Component {...PROPS} id="id" />).tagName("BUTTON");
    });

    it("Div", () => {
      const Component = classed(RequiredDiv, "class");
      expect(<Component {...PROPS} id="id" />).tagName("DIV");
    });
  });
});
