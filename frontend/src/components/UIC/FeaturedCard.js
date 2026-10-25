
import React from "react";
import { useNavigate } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";

export default function FeaturedCard(props) {
  const navigate = useNavigate();

  const visitDetails = () => {
    navigate(`/experiencedetails/${props.id}`);
  };

  return (
    <article className="featured-trip-card">
      <img
        className="featured-trip-image"
        src={props.image || fallbackImage}
        alt={props.title || "Featured travel destination"}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />

      <div className="featured-trip-overlay">
        <span className="featured-label">✦ Featured memory</span>

        <div className="featured-trip-info">
          <span className="featured-trip-type">
            {props.tripType || "Travel"}
          </span>

          <h2>{props.title}</h2>

          <p>
            {props.description ||
              "A special journey, captured in your travel memories."}
          </p>

          <button
            className="featured-trip-button"
            onClick={visitDetails}
            type="button"
          >
            View trip <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
