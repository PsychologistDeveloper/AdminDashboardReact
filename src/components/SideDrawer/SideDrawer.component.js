import React from 'react';
import { connect } from 'react-redux';

import './SideDrawer.style.scss';
import { Link } from 'react-router-dom';
import CsvReportButton from 'Components/CsvReportButton';
import Loader from 'Components/Loader/Loader.container';
import Popup from 'Components/Popup/Popup.container';
import { setActiveMobileNavigation, updateActivePopupId } from 'Store/Popup/Popup.action';

import { SIDE_DRAWER_POPUP_ID } from 'Components/SideDrawer/SideDrawer.config';

export const mapDispatchToProps = (dispatch) => ({
  updateActivePopupId: (activePopupId) => dispatch(updateActivePopupId(activePopupId)),
  setActiveMobileNavigation: (status) => dispatch(setActiveMobileNavigation(status)),
});

const SideDrawerComponent = (props) => {
  const { updateActivePopupId, setActiveMobileNavigation } = props;

  const onCloseNavigation = () => {
    updateActivePopupId('');
    setActiveMobileNavigation(false);
  };

  return (
    <Popup
      popupId={SIDE_DRAWER_POPUP_ID}
      hookClasses={['SideDrawer open']}
    >
      <nav>
        <div className="Navigation-Links">
          <Link to="/" onClick={onCloseNavigation}>Dashboard</Link>
          <Link to="/chat-board" onClick={onCloseNavigation}>Chat Board</Link>
          <Link to="/customers" onClick={onCloseNavigation}>Customers</Link>
          <Link to="/statistics" onClick={onCloseNavigation}>Statistics</Link>
          <CsvReportButton />
        </div>
      </nav>
      <Loader isLoading={false} />
    </Popup>
  );
};

export default connect(null, mapDispatchToProps)(SideDrawerComponent);
