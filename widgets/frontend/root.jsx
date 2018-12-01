import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const obj1 = {title: "one", content: "tab 1"};
const obj2 = {title: "two", content: "tab 2"};

const tabs = [obj1, obj2];

const Root = () => (
  <div>
    <h1>Clock</h1>
    <Clock />
    <h1>Tabs</h1>
    <Tabs allTabs={tabs} />
  </div>
);

export default Root;
