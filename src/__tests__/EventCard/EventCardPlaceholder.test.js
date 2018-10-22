import React from "react";
import { mount } from "enzyme";
import EventCardPlaceholder from "../../components/EventCard/EventCardPlaceholder";

describe("EventCardPlaceholder component ->", () => {
  it("Check event card loader", () => {
    expect(
      mount(<EventCardPlaceholder />)
        .find("img")
        .at(0)
        .prop("src")
    ).toBe("https://assets.bandsintown.com/images/fallbackImage.png");
  });
});
