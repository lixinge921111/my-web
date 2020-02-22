import React, { useState } from "react";
import "../styles/hobby.css";
import { BLIZZARD_CLIENT_ID, BLIZZARD_CLIENT_SECRET } from "./hearthstone";

const examples = [
  {
    name: "The Lich King",
    id: 37226
  },
  {
    name: "Yogg-Saron",
    id: 33288
  },
  {
    name: "Ragnaros",
    id: 11502
  },
  {
    name: "Lady Jaina Proudmoore",
    id: 146416
  },
  {
    name: "N'Zoth the Corruptor",
    id: 158041
  }
];

type Data = {
  name: string;
  description: string;
  health: number;
};

const WOWPage = () => {
  const blizzard = require("blizzard.js").initialize({
    key: BLIZZARD_CLIENT_ID,
    secret: BLIZZARD_CLIENT_SECRET,
    origin: "eu",
    locale: "en_GB"
  });

  const [data, setData] = useState<Data | null>(null);
  const [input, setInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchBossData(id: string) {
    try {
      setIsLoading(true);
      await blizzard.getApplicationToken().then(response => {
        blizzard.defaults.token = response.data.access_token;
      });
      const bossData = await blizzard.wow.boss({ id: id });
      setIsLoading(false);
      setData(bossData.data);
    } catch (err) {
      setIsLoading(false);
      setError(
        "Problem with loading information, you probably entered an invalid boss ID"
      );
    }
  }

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className="game">
      <h2>Check WOW Boss Basic Information</h2>
      <div>
        <label>Enter Boss ID here:</label>
        <input
          style={{ marginLeft: "5px" }}
          onChange={handleChange}
          value={input!}
        />
        <button onClick={() => fetchBossData(input!)}>search</button>
      </div>

      <div>
        <h3>Same famous bosses and their ID:</h3>
        <table
          style={{
            alignItems: "center",
            display: "inline-block",
            border: "1px solid black",
            borderCollapse: "collapse"
          }}
        >
          <tbody>
            <tr style={{ fontWeight: "bold" }}>
              <td>Boss Name</td>
              <td>ID number</td>
            </tr>
            {examples.map(boss => (
              <tr key={boss.id}>
                <td>{boss.name}</td>
                <td>{boss.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Boss information</h3>
        {isLoading && <div>Loading...</div>}
        {Boolean(data) && (
          <div>
            <p>Boss Name: {data?.name}</p>
            <p>Boss Health: {data?.health}</p>
            <p style={{ textAlign: "justify", padding: "0px 50px" }}>
              Boss Introduction: {data?.description}{" "}
            </p>
          </div>
        )}
        {Boolean(error) && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default WOWPage;
