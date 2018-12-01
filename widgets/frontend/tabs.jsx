import React from 'react';
import TabIndexItems from './tabIndexItems.jsx';
import TabIndex from './tabindex.jsx';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({index: 0});
  }

  toggleTab(e) {
    
  }

  render() {
    return (
      <div>
        <TabIndex allTabs = {this.props.allTabs} />
      </div>
    );
  }
}


export default Tabs;
