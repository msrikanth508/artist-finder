import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardLink,
  Row,
  Col,
  Button,
  Badge
} from "reactstrap";
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
        <Card>
          <div className="img-container">
            <img
              width="100%"
              src="https://assets.bandsintown.com/images/fallbackImage.png"
              alt="pic"
            />
            <Like />
          </div>

          <CardBody>
            <FaClock /> {formatDate(event.datetime)}
            <br />
            <FaMapMarkerAlt /> {event.venue.name}, {event.venue.city},{" "}
            {event.venue.country}.{" "}
            <CardLink
              href={`http://maps.google.com/maps?q=${event.venue.latitude},${
                event.venue.longitude
              }`}
              target="_blank"
            >
              View on Map.
            </CardLink>
            <br />
          </CardBody>

          <CardBody>
            <CardSubtitle>Description</CardSubtitle>
            <div className="description">{event.description || "NA"}</div>
            <CardSubtitle>Lineup</CardSubtitle>
            <div>
              {event.lineup.map(item => (
                <Badge key={item} className="tag" color="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </CardBody>
          <CardBody>
            <a href={event.url} rel="noopener noreferrer" target="_blank">
              <Button color="primary">
                {event.offers &&
                event.offers.length &&
                event.offers[0].status === "available"
                  ? "Buy Tickets"
                  : "Notify Me"}
              </Button>
            </a>
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
);

EventCard.propTypes = {
  events: PropTypes.array
};

export default EventCard;
