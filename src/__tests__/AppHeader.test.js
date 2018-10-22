import React from "react";
import { mount } from "enzyme";
import AppHeader from "../components/AppHeader/";

describe("<AppHeader />", () => {
  it("Check toggler", () => {
    const wrapper = mount(<AppHeader />);
    wrapper.instance().toggle();

    expect(wrapper.state("isOpen")).toBe(true);
  });

  it("Check toggler", () => {
    const wrapper = mount(<AppHeader />);
    wrapper.instance().handleToggle();

    expect(wrapper.state("isTouched")).toBe(true);
  });
});
