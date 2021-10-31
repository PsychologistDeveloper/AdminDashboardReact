import React from 'react';
import { connect } from 'react-redux';

import DrawerToggleButton from 'Components/DrawerToggleButton';

import './Header.styles.scss';
import Button from '@mui/material/Button';
import { CHAT_BOARD_MOBILE_TABS } from 'Routes/ChatBoardPage/ChatBoardPage.config';
import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';

export const mapDispatchToProps = (dispatch) => ({
  openPopup: (popupId) => updateActivePopupId(dispatch, popupId),
});

export const HeaderComponent = ({ openPopup }) => {
  function onSelectTabClick() {
    openPopup(CHAT_BOARD_MOBILE_TABS);
  }

  return (
    <header className="Header">
      <Button
        variant="outlined"
        onClick={onSelectTabClick}
        className="Tab-Button"
      >
        Select Tab
      </Button>
      <DrawerToggleButton />
    </header>
  );
};

export default connect(null, mapDispatchToProps)(HeaderComponent);
