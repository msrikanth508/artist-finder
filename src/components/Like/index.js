import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import styles from "../../styles/index.module.scss";

/**
 * Like component to be shown on event Card Component
 */
class Like extends React.PureComponent {
  /**
   * Component State
   */
  state = {
    isLiked: false,
    votes: Math.floor(Math.random() * 999) + 1
  };
  /**
   *
   * Handle thumbs up click event
   */
  handleLikeClick = () => {
    this.setState(prevState => ({
      votes: prevState.isLiked ? prevState.votes - 1 : prevState.votes + 1,
      isLiked: !prevState.isLiked
    }));
  };

  render() {
    const { isLiked, votes } = this.state;
    return (
      <div className="like-container">
        <div className={styles["like-icon__text-block"]}>
          <div className={styles["like-icon__votes"]}>{votes}</div>
          <div className={styles["like-icon__text"]}>votes</div>
        </div>
        <span
          className={`${styles["like-icon"]} ${
            isLiked ? styles["like-icon--liked"] : ""
          }`}
          onClick={this.handleLikeClick}
        >
          <FaThumbsUp />
        </span>
      </div>
    );
  }
}

export default Like;
