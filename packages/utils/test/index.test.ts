import { describe, expect, it } from "vitest";

import { cx } from "./../src";

describe("cx", () => {
  it("works", () => {
    expect(cx()).toEqual("");
    expect(cx("foo")).toEqual("foo");
    expect(cx("foo bar")).toEqual("foo bar");
    expect(cx("foo", "bar")).toEqual("foo bar");
    expect(cx(null, "foo", false, "bar", undefined)).toEqual("foo bar");
    expect(cx(0 as any, "foo", {} as any, "bar", [] as any)).toEqual("foo bar");
  });
});
