import React from 'react';
import { connect } from 'react-redux';
import NavComponent from 'Components/Nav/Nav.component';
import { setActiveNavigationTab } from 'Store/ChatBoard/ChatBoard.action';
import BrowserDatabase from 'Utils/BrowserDatabase';
import { ACTIVE_TAB_ID } from 'Components/Nav/Nav.config';

export const mapStateToProps = (state) => ({
  activeTab: state.ChatBoardReducer.activeTab,
});

export const mapDispatchToProps = (dispatch) => ({
  setActiveNavigationTab: (tabId) => dispatch(setActiveNavigationTab(tabId)),
});

export const NavContainer = (props) => {
  const {
    setActiveNavigationTab,
    activeTab,
  } = props;

  const handleClickActiveTab = (tabId) => {
    setActiveNavigationTab(tabId);
    BrowserDatabase.setItem(ACTIVE_TAB_ID, tabId);
  };

  return (
    <NavComponent
      onClick={handleClickActiveTab}
      activeTab={activeTab}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
