import React, { useState } from 'react';
import { connect } from 'react-redux';

import SideDrawer from 'Components/SideDrawer/SideDrawer.component';
import { setActiveMobileNavigation, updateActivePopupId } from 'Store/Popup/Popup.action';
import BrowserDatabase from 'Utils/BrowserDatabase/BrowserDatabase';

export const mapDispatchToProps = (dispatch) => ({
  updateActivePopupId: (activePopupId) => dispatch(updateActivePopupId(activePopupId)),
  setActiveMobileNavigation: (status) => dispatch(setActiveMobileNavigation(status)),
});

const SideDrawerContainer = (props) => {
  const { updateActivePopupId, setActiveMobileNavigation } = props;
  const [activeTab, setActiveTab] = useState(BrowserDatabase.getItem('activeTabId'));

  const onCloseNavigation = (tabId) => {
    setActiveTab(tabId);
    BrowserDatabase.setItem('activeTabId', tabId);
    updateActivePopupId('');
    setActiveMobileNavigation(false);
  };

  return (
    <SideDrawer onClick={onCloseNavigation} activeTab={activeTab} />
  );
};

export default connect(null, mapDispatchToProps)(SideDrawerContainer);
