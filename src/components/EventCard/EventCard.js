import React from "react";
import { Card, CardBody, CardLink, Row, Col, Button, Badge } from "reactstrap";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { formatDate } from "../../utils/";
import Like from "../Like/";
import PropTypes from "prop-types";

/**
 *
 * EventCard Component
 * @param {any} { events }
 */
const EventCard = ({ events }) => (
  <Row>
    {events.map((event, index) => (
      <Col xs="12" sm="6" md="6" lg="4" key={event.id}>
        <Card className="event-card">
          <div className="img-container">
            <img
              width="100%"
              src="https://assets.bandsintown.com/images/fallbackImage.png"
              alt="pic"
            />
            <Like />
          </div>
          <CardBody className="card-info-body">
            <div className="flex cart-info-item">
              <span>
                <FaClock />
              </span>
              <span className="text">{formatDate(event.datetime)}</span>
            </div>

            <div className="flex cart-info-item">
              <span>
                <FaMapMarkerAlt />
              </span>
              <span className="text">
                {event.venue.name}, {event.venue.city}, {event.venue.country}.{" "}
                <CardLink
                  href={`http://maps.google.com/maps?q=${
                    event.venue.latitude
                  },${event.venue.longitude}`}
                  target="_blank"
                >
                  View on Map.
                </CardLink>
              </span>
            </div>
            <br />
            <small>Description</small>
            <p className="description" title={event.description}>
              {event.description || "NA"}
            </p>
            {/* <small>Lineup</small>
            <div>
              {event.lineup.map(item => (
                <Badge key={item} className="tag" color="secondary">
                  {item}
                </Badge>
              ))}
            </div> */}
          </CardBody>

          <a href={event.url} rel="noopener noreferrer" target="_blank">
            <Button color="primary">
              {event.offers &&
              event.offers.length &&
              event.offers[0].status === "available"
                ? "Buy Tickets"
                : "Notify Me"}
            </Button>
          </a>
        </Card>
      </Col>
    ))}
  </Row>
);

EventCard.propTypes = {
  events: PropTypes.array
};

export default EventCard;
