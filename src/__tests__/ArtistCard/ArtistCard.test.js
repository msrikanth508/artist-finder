import React from "react";
import { mount } from "enzyme";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const artistData = {
  thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/205646.jpeg",
  mbid: "b6b7668a-2c5b-463e-b1fd-634ae56ea708",
  facebook_page_url: "https://www.facebook.com/pages/Jo/439647259414157",
  image_url: "https://s3.amazonaws.com/bit-photos/large/205646.jpeg",
  name: "JO",
  id: "143239",
  tracker_count: 2145,
  upcoming_event_count: 6,
  url: "https://www.bandsintown.com/a/143239?came_from=267&app_id=asdsfsdfdsfdf"
};

describe("<ArtistCard />", () => {
  describe("Proper data check", () => {
    const ACard = mount(<ArtistCard artist={artistData} />);
    it("Testcase 1", () => {
      expect(
        ACard.find("img")
          .at(0)
          .prop("src")
      ).toBe(artistData.thumb_url);
    });

    it("Testcase 2", () => {
      expect(
        ACard.find("td")
          .at(1)
          .find("a")
          .prop("href")
      ).toBe(artistData.facebook_page_url);
    });

    it("Testcase 3", () => {
      expect(
        ACard.find("td")
          .at(1)
          .find("a")
          .text()
      ).toBe(artistData.facebook_page_url);
    });
  });

  describe("Improper data check", () => {
    const ACard = mount(<ArtistCard artist={{
      ...artistData,
      facebook_page_url: '',
    }} />);
    it("Testcase 1", () => {
      expect(
        ACard.find("td")
          .at(1)
          .find("a")
          .prop("href")
      ).toBe("#");
    });
    it("Testcase 2", () => {
      expect(
        ACard.find("td")
          .at(1)
          .find("a")
          .text()
      ).toBe("NA");
    });
  });
});
