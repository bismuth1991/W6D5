import React from 'react';
import TabIndexItems from './tabIndexItems.jsx';

// class TabIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   toggleTab(e) {
//
//   }
// }

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
      })}
    </ul>
  );
};

export default TabIndex;
