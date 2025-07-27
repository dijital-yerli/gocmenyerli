import React, { useState } from "react";
import behaviors from "../data/behaviors.json";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: 32, fontFamily: "sans-serif" }}>
      <h1>Dijital Yerliler için Öğretmen Rehberi</h1>
      <p>Hangi davranışı geliştirmek istiyorsun?</p>
      <select onChange={e => setSelected(e.target.value)} defaultValue="">
        <option value="" disabled>Davranış Seçiniz</option>
        {behaviors.behaviors.map((b, i) => (
          <option key={i} value={i}>{b.name}</option>
        ))}
      </select>
      {selected !== null && (
        <div style={{ marginTop: 32 }}>
          <h2>{behaviors.behaviors[selected].name}</h2>
          <h3>Ödül/Rozet Önerileri:</h3>
          <ul>
            {behaviors.behaviors[selected].rewards.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h3>Motivasyon Cümleleri:</h3>
          <ul>
            {behaviors.behaviors[selected].motivational_quotes.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}