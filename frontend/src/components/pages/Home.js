
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UIC/Card";
import FeaturedCard from "../UIC/FeaturedCard";
import { baseUrl } from "../../url";
import "../../App.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    axios
      .get(`${baseUrl}/trip/`)
      .then((res) => {
        if (active) {
          setData(Array.isArray(res.data) ? res.data : []);
        }
      })
      .catch((err) => {
        console.error("Unable to load trips:", err);
        if (active) {
          setError("We couldn't load your trips. Please try again.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="home-page">
        <div className="home-status">Loading your travel memories…</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="home-page">
        <div className="home-status home-error">{error}</div>
      </main>
    );
  }

  const featuredTrips = data.filter((trip) => trip.featured);
  const regularTrips = data.filter((trip) => !trip.featured);

  return (
    <main className="home-page">
      <section className="home-intro">
        <span className="home-eyebrow">Your journeys, your stories</span>
        <h1 className="home-title">Every trip tells a story.</h1>
        <p className="home-description">
          Keep your favourite destinations, unforgettable experiences, and
          travel memories together in one beautiful place.
        </p>
      </section>

      {featuredTrips.length > 0 && (
        <section aria-labelledby="featured-heading">
          <h2 className="section-heading" id="featured-heading">
            Featured memory
          </h2>

          {featuredTrips.map((trip) => (
            <div className="featured-trip-spacing" key={trip._id}>
              <FeaturedCard
                id={trip._id}
                title={trip.tripName}
                tripType={trip.tripType}
                description={trip.shortDescription}
                image={trip.image}
              />
            </div>
          ))}
        </section>
      )}

      <section aria-labelledby="trips-heading">
        <h2 className="section-heading" id="trips-heading">
          Your travel collection
        </h2>

        {regularTrips.length > 0 ? (
          <div className="trip-grid">
            {regularTrips.map((trip) => (
              <Card
                key={trip._id}
                id={trip._id}
                title={trip.tripName}
                tripType={trip.tripType}
                description={trip.shortDescription}
                image={trip.image}
              />
            ))}
          </div>
        ) : (
          featuredTrips.length === 0 && (
            <div className="home-status">
              Your travel collection is ready for its first memory.
            </div>
          )
        )}
      </section>
    </main>
  );
}
