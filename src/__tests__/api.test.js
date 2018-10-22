import Api from "../api/";
import { cache } from "../utils/";

describe("Data fetcher", () => {
  describe("", () => {
    beforeEach(() => {
      cache.clearAll();
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

    it("Testcase 1", () => {
      Api.getArtistData("j").then(response => {
        expect(response.id).toBe(123);
      });

      Api.getArtistEvents("j").then(response => {
        expect(response.id).toBe(123);
      });
    });

    it("Testcase 2", () => {
      cache.setItem(
        "jo_info",
        JSON.stringify({
          id: 123
        })
      );
      cache.setItem(
        "jo_events",
        JSON.stringify({
          id: 123
        })
      );
      Api.getArtistData("jo").then(response => {
        expect(response.id).toBe(123);
      });

      Api.getArtistEvents("jo").then(response => {
        expect(response.id).toBe(123);
      });
    });
  });
});

describe("", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve({
            ok: false,
            id: 123
          });
        })
    );
  });

  it("Testcase reject 1", () => {
    Api.getArtistData("abc").catch(e => {
      expect(e instanceof Error).toBe(true);
    });

    Api.getArtistEvents("abc").then(e => {
      expect(e instanceof Error).toBe(true);
    });
  });
});
