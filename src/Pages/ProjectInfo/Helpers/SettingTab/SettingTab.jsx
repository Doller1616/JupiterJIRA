import { Tabs } from 'antd';
import { useState } from 'react';
import {About,Contact,Services} from '../SideTabItems'

const SideTabs = ({activeIcon}) => {
  const [tabPosition, setTabPosition] = useState('left');
  const [selectedTab, setSelectedTab] = useState('about'); // Add state for selected tab

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  // Render component based on selected tab
  const renderComponent = () => {
    switch (selectedTab) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
    {/* Side menu */}
    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
      
      <Tabs
        tabPosition={tabPosition}
        style={{height: '100%'}}
        onChange={(key) => setSelectedTab(key)} // Update selected tab state
        activeKey={selectedTab} // Set active tab based on selected tab state
        items={[
          {
            label: 'General Settings',
            key: 'about',
          },
          {
            label: 'Task Settings',
            key: 'contact',
          },
          {
            label: 'WorkFlow Settings',
            key: 'services',
          },
        ]}
      />
       </div>
       <div style={{ flex: '1' }}>
        {renderComponent()}
      </div>
    </div>
  );
};
export default SideTabs;














