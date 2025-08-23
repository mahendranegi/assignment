import React from 'react';
import { Tabs } from 'antd';

function InfoTabs({ items, defaultKey = "1" }) {
  const onChange = (key) => {
    console.log("Active Tab:", key);
  };

  return (
    <div className="TabsSection">
      <Tabs defaultActiveKey={defaultKey} items={items} onChange={onChange} />
    </div>
  );
}

export default InfoTabs;
