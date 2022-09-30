import { Tab, Tabs } from '@mui/material';
import React, { useCallback, useState } from 'react';

import TabPanel from '../../components/TabPanel';
import JSON from '../JSON';

const Json = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabWrapperHeight, setTabWrapperHeight] = useState<number>(48);

  const tabWrapperRef = useCallback((node: HTMLDivElement) => {
    setTabWrapperHeight(node.clientHeight);
  }, []);

  const a11yProps = (index: number) => {
    return {
      id: `json-tab-${index}`,
      'aria-controls': `json-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <div ref={tabWrapperRef}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="json tab panel">
          <Tab label="Json Editor" {...a11yProps(0)} />
        </Tabs>
      </div>

      <TabPanel value={currentTab} index={0} sx={{ height: `calc(100% - ${tabWrapperHeight}px)` }}>
        <JSON />
      </TabPanel>
    </>
  );
};

export default Json;
