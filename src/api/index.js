import { cache } from "../utils/";

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
    const key = `${artistName}_info`;

    // if cache has data, retrieve it
    if (cache.has(key)) {
      return Promise.resolve(JSON.parse(cache.getItem(key)));
    }
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
        cache.setItem(key, JSON.stringify(res));
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
    const key = `${artistName}_events`;
    
    // if cache has data, retrieve it
    if (cache.has(key)) {
      return Promise.resolve(JSON.parse(cache.getItem(key)));
    }
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
        cache.setItem(key, JSON.stringify(res));
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
