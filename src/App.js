import React, { useState } from "react";
import "./styles.css";

const genreDB = {
  subconsciousMind: [
    { name: "Sajeda Batra", rating: "4/5" },
    { name: "Anil Seth", rating: "3.5/5" }
  ],
  communicationSkills: [
    { name: "Niloofer Giri", rating: "4/5" },
    { name: "Danish Dhamani", rating: "3.5/5" }
  ],
  Science: [
    { name: "Asitang Mishra", rating: "4/5" },
    { name: "Simona Francese", rating: "3.5/5" }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("subconsciousMind");
  function genreSelect(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}> TEDXTALK Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        Check out my TEDXTALK Recommendation.Select a genre to get started
      </p>
      <div>
        {Object.keys(genreDB).map((item) => (
          <button
            key={item}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={() => genreSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {genreDB[genre].map((item) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
              key={item.name}
            >
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}