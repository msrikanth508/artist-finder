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
    jest.useFakeTimers();
    const wrapper = mount(<AppHeader />);
    jest.runAllTimers();
    wrapper.instance().handleToggle();
    expect(wrapper.state("isTouched")).toBe(true);
  });

  it("Check toggler", () => {
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(cb => cb());
    const wrapper = mount(<AppHeader />);
    // jest.runAllTimers();
    jest.useFakeTimers();
    wrapper.instance().startStopNotificationIconAnimation();
    jest.runAllTimers();
    window.requestAnimationFrame.mockRestore();
    expect(wrapper.state("animateNotificationIcon")).toBe(true);
  });
});
