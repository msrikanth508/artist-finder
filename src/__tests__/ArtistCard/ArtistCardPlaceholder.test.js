import React from "react";
import { mount } from "enzyme";
import ArtistCardPlaceholder from "../../components/ArtistCard/ArtistCardPlaceholder";

describe("Artist Card placeholder ->", () => {
  it("Testcase 1", () => {
    expect(
      mount(<ArtistCardPlaceholder />)
        .find("img")
        .at(0)
        .prop("src")
    ).toBe("https://assets.bandsintown.com/images/fallbackImage.png");
  });
});
