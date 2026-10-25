
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../url";
import "./ExperienceDetails.css";

const fallbackImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85";

export default function ExperienceDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError("");
    setTrip(null);

    axios
      .get(`${baseUrl}/trip/${id}`)
      .then((response) => {
        if (active) setTrip(response.data);
      })
      .catch((err) => {
        console.error("Unable to load trip:", err);
        if (active) setError("We couldn't load this trip. Please try again.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  const formatDate = (value) => {
    if (!value) return "Not specified";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatCost = (value) => {
    if (value === undefined || value === null || value === "") {
      return "Not specified";
    }

    const amount = Number(value);
    return Number.isFinite(amount)
      ? `₹${amount.toLocaleString("en-IN")}`
      : value;
  };

  if (loading) {
    return (
      <main className="trip-detail-page">
        <div className="trip-detail-message">Loading your travel story...</div>
      </main>
    );
  }

  if (error || !trip) {
    return (
      <main className="trip-detail-page">
        <div className="trip-detail-message">
          <h2>Trip not available</h2>
          <p>{error || "We couldn't find this travel experience."}</p>
          <Link to="/" className="trip-back-link">
            ← Back to trips
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="trip-detail-page">
      <div className="trip-detail-container">
        <Link to="/my-experiences" className="trip-back-link">
          <span aria-hidden="true">←</span> All my experiences
        </Link>

        <section className="trip-detail-hero">
          <img
            className="trip-detail-hero-image"
            src={trip.image || fallbackImage}
            alt={trip.tripName || "Travel destination"}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackImage;
            }}
          />

          <div className="trip-detail-hero-shade">
            <span className="trip-detail-category">
              ✦ {trip.tripType || "Travel memory"}
            </span>

            <h1>{trip.tripName || "My Travel Story"}</h1>

            <p>
              {trip.shortDescription ||
                "A journey filled with places, moments, and memories."}
            </p>
          </div>
        </section>

        <section className="trip-detail-overview">
          <div className="trip-detail-section-heading">
            <span>THE JOURNEY</span>
            <h2>Your trip at a glance</h2>
          </div>

          <div className="trip-detail-info-grid">
            <article className="trip-info-card">
              <span className="trip-info-icon">📅</span>
              <span className="trip-info-label">Start date</span>
              <strong>{formatDate(trip.startDateOfJourney)}</strong>
            </article>

            <article className="trip-info-card">
              <span className="trip-info-icon">🗓️</span>
              <span className="trip-info-label">End date</span>
              <strong>{formatDate(trip.endDateOfJourney)}</strong>
            </article>

            <article className="trip-info-card">
              <span className="trip-info-icon">🏨</span>
              <span className="trip-info-label">Accommodation</span>
              <strong>{trip.nameOfHotels || "Not specified"}</strong>
            </article>

            <article className="trip-info-card">
              <span className="trip-info-icon">💰</span>
              <span className="trip-info-label">Total trip cost</span>
              <strong>{formatCost(trip.totalCost)}</strong>
            </article>
          </div>
        </section>

        <section className="trip-detail-places">
          <div className="trip-detail-section-heading">
            <span>EXPLORE</span>
            <h2>Places you discovered</h2>
          </div>

          <div className="trip-places-panel">
            <span className="trip-places-pin">📍</span>
            <p>{trip.placesVisited || "No places added yet."}</p>
          </div>
        </section>

        <section className="trip-detail-story">
          <div className="trip-detail-section-heading">
            <span>YOUR MEMORIES</span>
            <h2>The story behind this trip</h2>
          </div>

          <div className="trip-story-content">
            <span className="trip-story-quote" aria-hidden="true">
              “
            </span>
            <p>
              {trip.experience ||
                "Your travel story will appear here when you add your experience."}
            </p>
          </div>
        </section>

        <footer className="trip-detail-footer">
          <span>✈ Made of places, moments, and memories.</span>
          <Link to="/my-experiences">Explore more trips →</Link>
        </footer>
      </div>
    </main>
  );
}
