import { describe, it } from "vitest";

import { render, fireEvent } from "@solidjs/testing-library";

import * as expects from "./expects";

import { ClassedButton, ClassedButtonReactive } from "./index.test.utils";

describe("ClassedButton", () => {
  it("default", () => {
    const element = render(() => (
      <ClassedButton data-testid="root" class="extra classes">
        children
      </ClassedButton>
    )).getByTestId("root");

    expects.element(element).tagName("BUTTON").className("button extra classes").textContent("children");
  });

  it("reactive", () => {
    const { getByTestId } = render(() => <ClassedButtonReactive />);

    let element = getByTestId("reactive");

    expects.element(element).tagName("BUTTON").className("button extra classes");

    fireEvent.click(element);

    expects
      .element((element = getByTestId("reactive")))
      .tagName("BUTTON")
      .className("button extra classes reactive");
  });
});
