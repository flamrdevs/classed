import { describe, expect, it } from "vitest";

import clsx from "clsx";

import classed, { create } from "./../src/index.tsx";

describe("test", () => {
  it("works", () => {
    const element = classed("div", "foo", "bar");
    expect(element.type).toEqual("div");
    expect(element.props.class).toEqual("foo bar");
  });

  describe("custom", () => {
    it("works", () => {
      const classed = create({ cx: clsx });
      const element = classed("div", "foo", "bar");
      expect(element.type).toEqual("div");
      expect(element.props.class).toEqual("foo bar");
    });
  });
});
