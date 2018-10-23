import { cache } from "../utils/";
import constants from "../constants/";

const {
  LAST_SEARCH_KEY,
  LAST_SEARCH_ARTIST_DETAILS,
  LAST_SEARCH_ARTIST_EVENTS
} = constants;
/**
 * DataFetcher
 */
class DataFetcher {
  /**
   *
   * Get all artist data
   * @static
   * @param {string} artistName
   * @returns
   * @memberof DataFetcher
   */
  static getArtistData(artistName) {
    // save search term
    cache.setItem(LAST_SEARCH_KEY, artistName);

    // make server call
    return fetch(
      `https://rest.bandsintown.com/artists/${encodeURIComponent(
        artistName
      )}?app_id=noappid`,
      {
        method: "get"
      }
    )
      .then(handleErrors)
      .then(res => {
        // save data into cache
        cache.setItem(LAST_SEARCH_ARTIST_DETAILS, JSON.stringify(res));
        return res;
      })
      .catch(e => {
        console.log(`Data fetching error: ${e}`);
        throw e;
      });
  }
  /**
   *
   * Get all artist events
   * @static
   * @param {string} artistName
   * @returns
   * @memberof DataFetcher
   */
  static getArtistEvents(artistName) {
    // make server call
    return fetch(
      `https://rest.bandsintown.com/artists/${encodeURIComponent(
        artistName
      )}/events?app_id=noappid`,
      {
        method: "get"
      }
    )
      .then(handleErrors)
      .then(res => {
        // save data into cache
        cache.setItem(LAST_SEARCH_ARTIST_EVENTS, JSON.stringify(res));
        return res;
      })
      .catch(e => {
        console.log(`Data fetching error: ${e}`);
        throw e;
      });
  }
}
/**
 *
 * Format response
 * @param {any} response
 * @returns
 */
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export default DataFetcher;
