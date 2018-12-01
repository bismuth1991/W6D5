import React from 'react';
import TabIndexItems from './tabIndexItems.jsx';

const TabIndex = function(props) {
  debugger;
  return (
    <ul>
      {props.allTabs.map (function(tab) {
        return (
          <li>
            <TabIndexItems tabInfo = {tab} />
          </li>
        );
      })};
    </ul>
  );
};

export default TabIndex;
