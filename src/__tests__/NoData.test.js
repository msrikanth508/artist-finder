import React from "react";
import { mount } from "enzyme";
import NoData from "../components/NoData";

describe("NoData Component ->", () => {
  it("Check Rendering", () => {
    expect(
      mount(<NoData />)
        .find(".display-3")
        .exists()
    ).toBe(true);
  });
});
