import React, { useState } from "react";

const tabs = [
  { label: "Home", content: "This is the home page" },
  { label: "About", content: "This is the about page" },
  { label: "Features", content: "This is the features page" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            id={`${tab.label}-tab`}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="viewport">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
