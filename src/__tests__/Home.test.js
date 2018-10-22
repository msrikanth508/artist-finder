import React from "react";
import { mount } from "enzyme";
import HomePage from "../containers/Home";

describe("Home Container ->", () => {
  describe("", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(
        () =>
          new Promise((resolve, reject) => {
            resolve({
              ok: true,
              id: 123,
              json: () => ({ id: 123 })
            });
          })
      );
    });

    it("Check cover view", () => {
      const Home = mount(<HomePage />);

      expect(Home.find("input").exists()).toBe(true);

      expect(Home.find(".lead").exists()).toBe(true);
    });

    it("Check no data view", () => {
      const Home = mount(<HomePage />);
      Home.setState({
        isArtistInfoFullFilled: true,
        isArtistEventsFullfilled: true,
        artistInfo: null,
        events: []
      });
      expect(
        Home.find("h1")
          .at(0)
          .text()
      ).toBe("No artists found.");
    });

    it("With search term", () => {
      const Home = mount(<HomePage />);
      Home.find("input").simulate("change", { target: { value: "al" } });
      expect(Home.find(".lead").exists()).toBe(false);
    });

    it("With search term", () => {
      const Home = mount(<HomePage />);

      Home.setState({
        searchTerm: "jo"
      });
      Home.instance().fetchData();

      setTimeout(() => {
        expect(Home.state("searchTerm")).toBe("jo");
      }, 1000);
    });

    it("With search term", () => {
      const Home = mount(<HomePage />);

      Home.setState({
        searchTerm: ""
      });
      Home.instance().fetchData();

      setTimeout(() => {
        expect(Home.state("searchTerm")).toBe("");
      }, 1000);
    });
  });

  describe("", () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve({
            ok: false,
            id: 123,
            json: () => ''
          });
        })
    );
    // it("With search term", async () => {   
    //   jest.useFakeTimers();   
    //   const Home = mount(<HomePage />);
    //   Home.setState({
    //     searchTerm: "jo"
    //   });
    //   const response = await Home.instance().fetchData();
    //   jest.runAllTimers();
    //   console.log(response)
    //   const result = await response.json();
    //   expect(result).toThrow()
    // });
  });
});
