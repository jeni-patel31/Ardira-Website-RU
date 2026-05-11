import React from "react";
import "./Stats.css";

function Stats() {
  const stats = [
    { number: "400", label: "Organizations worldwide trust Ardira" },
    { number: "5", symbol: "★", label: "Rating on Salesforce AppExchange" },
    { number: "0", label: "Integrations required to get started" },
    {
      number: "100",
      symbol: "%",
      label: "Native — your data never leaves Salesforce",
    },
  ];

  return (
    <section className="stats-section">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-card">
          <div className="stat-number">
            <span className="green">{stat.number}</span>
            {stat.symbol && stat.symbol}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

export default Stats;
