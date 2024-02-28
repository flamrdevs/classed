import { describe, expect, it } from "vitest";

import { cx } from "./../src";

describe("test", () => {
  it("works", () => {
    expect(cx()).toEqual("");
    expect(cx("foo")).toEqual("foo");
    expect(cx("foo bar")).toEqual("foo bar");
    expect(cx("foo", "bar")).toEqual("foo bar");
    expect(cx(null, "foo", false, "bar", undefined)).toEqual("foo bar");
  });
});
