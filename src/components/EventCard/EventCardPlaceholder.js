import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import styles from "../../styles/placeholder.module.scss";

const NUMBER_OF_LAYOUTS = 3;

/**
 * EventCardPlaceholder component to show as loader for EventCard componenet
 */
const EventCardPlaceholder = () => (
  <Row>
    {Array.from({ length: NUMBER_OF_LAYOUTS }).map((item, i) => (
      <Col xs="12" sm="4" key={i}>
        <Card>
          <CardBody>
            <img
              width="100%"
              src="https://assets.bandsintown.com/images/fallbackImage.png"
              alt="pic"
              className={styles.pending}
            />
          </CardBody>
          <CardBody>
            <div
              className={`${styles.pending} ${styles.pending__content} ${
                styles["pending--sm"]
              } ${styles["pending--width75"]}`}
            />
          </CardBody>
          <CardBody>
            <div
              className={`${styles.pending} ${styles.pending__content} ${
                styles["pending--sm"]
              } ${styles["pending--width100"]}`}
            />
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
);

export default EventCardPlaceholder;
