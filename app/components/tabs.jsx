"use client";
import { useState } from "react";
import Tab from "@/app/components/tab";
import TabContent from "@/app/components/tabContent";
import DifferentContent from "@/app/components/diffrentContent";

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-300 to-purple-700">
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

export default Tabbed;
