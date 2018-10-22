import React from "react";
import { Row, Col } from "reactstrap";
import styles from "../../styles/placeholder.module.scss";

/**
 * ArtistCardPlaceholder component to show as loader for ArtistCard componenet
 */
const ArtistCardPlaceholder = () => {
  return (
    <Row>
      <Col sm={{ size: 3 }}>
        <img
          width="100%"
          src="https://assets.bandsintown.com/images/fallbackImage.png"
          alt="pic"
          className={styles.pending}
        />
      </Col>
      <Col sm={{ size: 9 }}>
        <div
          className={`${styles.pending} ${styles.pending__content} ${
            styles["pending--sm"]
          } ${styles["pending--width25"]}`}
        />
        <div
          className={`${styles.pending} ${styles.pending__content} ${
            styles["pending--sm"]
          } ${styles["pending--width50"]}`}
        />
        <div
          className={`${styles.pending} ${styles.pending__content} ${
            styles["pending--sm"]
          } ${styles["pending--width75"]}`}
        />
      </Col>
    </Row>
  );
};

export default ArtistCardPlaceholder;
