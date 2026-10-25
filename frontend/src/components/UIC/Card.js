
import React from "react";
import { useNavigate } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80";

export default function Card(props) {
  const navigate = useNavigate();

  const visitDetails = () => {
    navigate(`/experiencedetails/${props.id}`);
  };

  return (
    <article className="trip-card">
      <div className="trip-card-image-wrap">
        <img
          className="trip-card-image"
          src={props.image || fallbackImage}
          alt={props.title || "Travel destination"}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackImage;
          }}
        />
        <span className="trip-type-badge">
          {props.tripType || "Travel"}
        </span>
      </div>

      <div className="trip-card-content">
        <h3 className="trip-card-title">{props.title}</h3>
        <p className="trip-card-description">
          {props.description || "Discover the memories from this trip."}
        </p>

        <button
          className="trip-details-button"
          onClick={visitDetails}
          type="button"
        >
          Explore trip <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
