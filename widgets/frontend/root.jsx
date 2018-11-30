import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const tabs = [
  {title: "one", content: "tab 1"},
  {title: "two", content: "tab 2"}
];

const Root = () => (
  <div>
    <h1>Clock</h1>
    <Clock />
    <h1>Tabs</h1>
  </div>
);

export default Root;
