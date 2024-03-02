import { describe, it } from "vitest";

import * as expects from "./expects";

import { render } from "./testing-library";

import { ClassedButton, ClassedButtonReactive, ClassedButtonSignalReactive } from "./index.test.utils";

describe("ClassedButton", () => {
  it("default", async () => {
    const element = (
      await render(
        <ClassedButton data-testid="root" class="extra classes">
          children
        </ClassedButton>
      )
    ).getByTestId("root");

    expects.element(element).tagName("BUTTON").className("button extra classes").textContent("children");
  });

  it("reactive", async () => {
    const { getByTestId, fireEvent } = await render(<ClassedButtonReactive />);

    let element = getByTestId("reactive");

    expects.element(element).tagName("BUTTON").className("button extra classes");

    await fireEvent.click(element);

    expects
      .element((element = getByTestId("reactive")))
      .tagName("BUTTON")
      .className("button extra classes reactive");
  });

  it("signal reactive", async () => {
    const { getByTestId, fireEvent } = await render(<ClassedButtonSignalReactive />);

    let element = getByTestId("reactive");

    expects.element(element).tagName("BUTTON").className("button extra classes");

    await fireEvent.click(element);

    expects
      .element((element = getByTestId("reactive")))
      .tagName("BUTTON")
      .className("button extra classes reactive");
  });
});
