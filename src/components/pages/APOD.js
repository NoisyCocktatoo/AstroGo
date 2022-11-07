import React, { useState, useEffect } from "react";
import "../../components/NASA.css";

function APOD() {
  const [photoData, setPhotoData] = useState(null);
  const apiKey = process.env.REACT_APP_NASA_KEY;

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="apod-container">
      <div className="background" />
      {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} className="apod-image" />
      ) : (
        <iframe
          title="APOD"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="video-temp"
        />
      )}

      <div className="apod-text">
        <h1 className="apod-title">{photoData.title}</h1>
        <p className="apod-date">Date: {photoData.date}</p>
        <p className="apod-explanation">{photoData.explanation}</p>
      </div>
    </div>
  );
}

export default APOD;
