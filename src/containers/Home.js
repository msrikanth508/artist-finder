import React from "react";
import {
  SearchBar,
  ArtistCard,
  EventCard,
  CoverPage,
  NoData
} from "../components/";
import api from "../api/";
import { debounce } from "../utils/";

/**
 * Home Component
 */
class Home extends React.PureComponent {
  state = this.getDefaultState();
  /**
   * 
   * Handle search event
   * @param {any} e 
   */
  handleSearch = e => {
    const { value } = e.target;
    this.setState({
      searchTerm: value
    });
    this.debounceSearch();
  };
  /**
   * Debounce search event
   */
  debounceSearch = debounce(this.fetchData, 500);
  /**
   * 
   * Fetch artists and events data
   * @memberof Home
   */
  fetchData() {
    const { searchTerm } = this.state;

    if (searchTerm.length) {
      this.setState(prevState => ({
        searchTerm,
        isArtistInfoPending: !prevState.isArtistInfoPending,
        isArtistEventsPending: !prevState.isArtistEventsPending,
        isArtistInfoFullFilled: false,
        isArtistEventsFullfilled: false
      }));

      // Get artists data
      api
        .getArtistData(searchTerm)
        .then(response => {
          this.setState({
            artistsInfo: response,
            isArtistInfoPending: false,
            isArtistInfoFullFilled: true
          });
        })
        .catch(e => {
          console.log(e);
          this.setState(() => ({
            artistsInfo: null,
            isArtistInfoPending: false,
            isArtistInfoFullFilled: true
          }));
        });

      // Get artist events data  
      api
        .getArtistEvents(searchTerm)
        .then(response => {
          this.setState({
            events: response,
            isArtistEventsPending: false,
            isArtistEventsFullfilled: true
          });
        })
        .catch(e => {
          console.log(e);
          this.setState(() => ({
            isArtistEventsPending: false,
            events: [],
            isArtistEventsFullfilled: true
          }));
        });
    } else {
      this.setState(this.getDefaultState());
    }
  }
  /**
   * Get default state
   */
  getDefaultState() {
    return {
      artistsInfo: null,
      searchTerm: "",
      events: [],
      isArtistInfoPending: false,
      isArtistInfoFullFilled: false,
      isArtistEventsFullfilled: false,
      isArtistEventsPending: false
    };
  }

  render() {
    const {
      isArtistInfoPending,
      isArtistInfoFullFilled,
      isArtistEventsPending,
      isArtistEventsFullfilled,
      artistsInfo,
      events,
      searchTerm
    } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <br />
        {isArtistInfoFullFilled &&
        isArtistEventsFullfilled &&
        !artistsInfo &&
        !events.length ? (
          <NoData />
        ) : null}
        {searchTerm.length === 0 ? <CoverPage /> : null}
        <ArtistCard
          artist={artistsInfo}
          isRequestPending={isArtistInfoPending}
        />
        <EventCard events={events} isRequestPending={isArtistEventsPending} />
      </div>
    );
  }
}

export default Home;
