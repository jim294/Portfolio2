import ActiveStar from "../assets/images/Active-star.webp"
import InactiveStar from "../assets/images/Inactive-star.webp"

function Stars({ numberActiveStars, numberInactiveStars }) {
  const stars = [];

  for (let i = 0; i < numberActiveStars; i++) {
    stars.push(
      <img
        key={i}
        src={ActiveStar}
        alt="Étoile active"
      />
    );
  }

  for (let i = 0; i < numberInactiveStars; i++) {
    stars.push(
      <img
        key={i + numberActiveStars}
        src={InactiveStar}
        alt="Étoile inactive"
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
}

export default Stars;
