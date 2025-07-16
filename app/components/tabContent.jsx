"use client";
import { useState } from "react";

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  return (
    <div className="tab-content bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg p-4 rounded-lg">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg p-4 rounded-lg">
        <button className="bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg p-4 rounded-lg">
          Undo
        </button>
        <button className="bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg p-4 rounded-lg">
          Undo in 2s
        </button>
      </div>
    </div>
  );
}

export default TabContent;
