import EventCardPlaceholder from "./EventCardPlaceholder";
import EventCard from "./EventCard";
import React from "react";
import PropTypes from "prop-types";
/**
 *
 * EventCardLayout component acts as holder component
 * @param {any} { events, isRequestPending }
 * @returns
 */
const EventCardLayout = ({ events, isRequestPending }) => {
  if (!isRequestPending && !events.length) {
    return null;
  }
  return (
    <React.Fragment>
      <h3>Upcoming Events</h3>
      {isRequestPending ? <EventCardPlaceholder /> : null}
      {!isRequestPending && events.length ? (
        <EventCard events={events} />
      ) : null}
    </React.Fragment>
  );
};

EventCardLayout.propTypes = {
  events: PropTypes.array,
  isRequestPending: PropTypes.bool
};

export default EventCardLayout;
