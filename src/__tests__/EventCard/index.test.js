import React from "react";
import { mount } from "enzyme";
import EventCardLayout from "../../components/EventCard/";

const eventsData = [
  {
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/1011888614?app_id=asdsfsdfdsfdf&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available"
      }
    ],
    venue: {
      name: "Littlefield",
      country: "United States",
      region: "NY",
      city: "Brooklyn",
      latitude: "40.65",
      longitude: "-73.95"
    },
    datetime: "2018-10-22T20:00:00",
    on_sale_datetime: "2018-09-22T00:12:24",
    description: "Butterboy with Jo, Aparna and Maeve",
    lineup: ["JO"],
    id: "1011888614",
    artist_id: "143239",
    url:
      "https://www.bandsintown.com/e/1011888614?app_id=asdsfsdfdsfdf&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event"
  }
];

describe("EventCardLayout Component ->", () => {
  it("Without data", () => {
    const ECardLayout = mount(
      <EventCardLayout events={[]} isRequestPending={false} />
    );
    expect(ECardLayout.find("h3").exists()).toBe(false);
  });

  it("With data", () => {
    const ECardLayout = mount(
      <EventCardLayout events={eventsData} isRequestPending={true} />
    );
    expect(
      ECardLayout.find("img")
        .at(0)
        .prop("src")
    ).toBe("https://assets.bandsintown.com/images/fallbackImage.png");
  });

  it("With data", () => {
    const ECardLayout = mount(
      <EventCardLayout events={eventsData} isRequestPending={false} />
    );
    expect(ECardLayout.find("h3").exists()).toBe(true);
  });
});
