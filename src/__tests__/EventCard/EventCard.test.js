import React from "react";
import { mount } from "enzyme";
import EventCard from "../../components/EventCard/EventCard";

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

describe("EventCard Component ->", () => {
  describe("Proper data check", () => {
    const ACard = mount(<EventCard events={eventsData} />);
    it("Check anchor url", () => {
      expect(
        ACard.find("a")
          .at(1)
          .prop("href")
      ).toBe(eventsData[0].url);
    });

    it("Check button text", () => {
      expect(
        ACard.find("a")
          .at(1)
          .find("button")
          .text()
      ).toBe("Buy Tickets");
    });
  });

  describe("Improper data check", () => {
    const data = [
      {
        ...eventsData[0],
        offers: null,
        description: '',
      }
    ];
    const ACard = mount(<EventCard events={data} />);

    it("Check button text", () => {
      expect(
        ACard.find("a")
          .at(1)
          .find("button")
          .text()
      ).toBe("Notify Me");
    });
  });
});
