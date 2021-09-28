import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavComponent from 'Components/Nav/Nav.component';
import { db } from 'Utils/Firebase';
import { setIsGrandAdmin } from 'Store/Admin/Admin.action';
import { setActiveNavigationTab } from 'Store/ChatBoard/ChatBoard.action';
import BrowserDatabase from 'Utils/BrowserDatabase';

export const mapStateToProps = (state) => ({
  activeTab: state.ChatBoardReducer.activeTab,
});

export const mapDispatchToProps = (dispatch) => ({
  setGrandAdmin: (isGrandAdmin) => dispatch(setIsGrandAdmin(isGrandAdmin)),
  setActiveNavigationTab: (tabId) => dispatch(setActiveNavigationTab(tabId)),
});

export const NavContainer = (props) => {
  const {
    admin: { uid },
    setGrandAdmin,
    setActiveNavigationTab,
    activeTab,
  } = props;

  const Fetchdata = () => {
    db.collection('admins')
      .where('uid', '==', uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          const { isGrandAdmin } = element.data();
          setGrandAdmin(isGrandAdmin);
        });
      });
  };

  useEffect(() => {
    Fetchdata();
  });

  const handleClickActiveTab = (tabId) => {
    setActiveNavigationTab(tabId);
    BrowserDatabase.setItem('activeTabId', tabId);
  };

  return (
    <NavComponent
      onClick={handleClickActiveTab}
      activeTab={activeTab}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
