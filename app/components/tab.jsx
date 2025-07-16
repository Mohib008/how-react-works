"use client";

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={`${
        activeTab === num ? "tab active" : "tab"
      } bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg p-4 rounded-lg `}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

export default Tab;
