import React from "react";
import { mount } from "enzyme";
import ArtistCardLayout from "../../components/ArtistCard/";

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

describe("<ArtistCardLayout />", () => {
  it("Testcase 1", () => {
    const ACardLayout = mount(
      <ArtistCardLayout artist={null} isRequestPending={false} />
    );
    expect(ACardLayout.find("h3").exists()).toBe(false);
  });

  it("Testcase 2", () => {
    const ACardLayout = mount(
      <ArtistCardLayout artist={artistData} isRequestPending={true} />
    );
    expect(ACardLayout.find(".list-group-item").exists()).toBe(true);
  });

  it("Testcase 3", () => {
    const ACardLayout = mount(
      <ArtistCardLayout artist={artistData} isRequestPending={false} />
    );
    expect(ACardLayout.find("h3").exists()).toBe(true);
  });
});
