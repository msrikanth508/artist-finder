import React from "react";
import { mount } from "enzyme";
import Like from "../components/Like/";

describe("Like Component ->", () => {
  const wrapper = mount(<Like />);
  it("Like rendering", () => {
    expect(wrapper.find(".like-container").exists()).toBe(true);
  });

  it("Like rendering", () => {
    expect(wrapper.find(".like-icon__votes").text()).toBe(
      String(wrapper.state("votes"))
    );
  });

  it("Like rendering", () => {
    const prevVotes = wrapper.state("votes");
    wrapper
      .find("span")
      .at(0)
      .simulate("click");
    expect(wrapper.state("votes")).toBe(prevVotes + 1);
  });

  it("Like rendering", () => {
    const prevVotes = wrapper.state("votes");
    wrapper
      .find("span")
      .at(0)
      .simulate("click");
    expect(wrapper.state("votes")).toBe(prevVotes - 1);
  });
});
