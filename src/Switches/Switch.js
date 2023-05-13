import React, { useState } from "react";
import "./Switch.css";

const Switch = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 72);

    setTimeout(() => {
      setSelectedTab(index);
    }, 300);

    onTabChange(tab, index);
  };

  return (
    <div className="switch">
      <div className="switch_items">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tab_item  ${selectedTab === index ? "active" : ""}`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="moving_bg" style={{ left }} />
      </div>
    </div>
  );
};

export default Switch;
