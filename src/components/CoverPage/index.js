import React from "react";
import { Jumbotron } from "reactstrap";

/**
 * CoverPage component
 */
export default () => (
  <Jumbotron>
    <h1 className="display-3">Artist Finder</h1>
    <p className="lead">
      Artist Finder is the quickest and the most convenient way to search about
      events around you. It provides your artist details and all upcoming events. It
      uses{" "}
      <a
        href="https://manager.bandsintown.com/support/bandsintown-api?locale=en"
        target="_blank"
      >
        Bandsintown public API
      </a>{" "}
      to fetch the results.
    </p>
  </Jumbotron>
);
