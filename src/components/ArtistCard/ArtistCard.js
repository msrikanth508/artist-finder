import React from "react";
import { Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";

/**
 * 
 * ArtistCard component to show artist details
 * @param {any} { artist } 
 */
const ArtistCard = ({ artist }) => (
  <Row>
    <Col xs="12" sm="3">
      <img src={artist.thumb_url} alt="avatar" width="100%" height="100%" />
    </Col>
    <Col sm={"auto"}>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{artist.name}</td>
          </tr>
          <tr>
            <th scope="row">Facebook Link </th>
            <td>
              <a href={artist.facebook_page_url || "#"}>
                {artist.facebook_page_url || "NA"}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Total Events</th>
            <td>{artist.upcoming_event_count}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Row>
);

ArtistCard.propTypes = {
  artist: PropTypes.object
};

export default ArtistCard;
