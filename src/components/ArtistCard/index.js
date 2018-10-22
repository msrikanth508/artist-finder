import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ArtistCardPlaceholder from "./ArtistCardPlaceholder";
import ArtistCard from "./ArtistCard";

/**
 * 
 * ArtistCardLayout component acts as holder component
 * @param {any} { artist, isRequestPending } 
 * @returns 
 */
const ArtistCardLayout = ({ artist, isRequestPending }) => {
  if (!isRequestPending && !artist) {
    return null;
  }
  return (
    <React.Fragment>
      <h3>Artist Details</h3>
      <ListGroup>
        <ListGroupItem className="list-group-item">
          {isRequestPending ? <ArtistCardPlaceholder /> : null}
          {!isRequestPending && artist ? <ArtistCard artist={artist} /> : null}
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
};

export default ArtistCardLayout;
