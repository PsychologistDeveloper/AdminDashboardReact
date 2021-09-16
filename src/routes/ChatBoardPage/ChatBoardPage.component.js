import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateActivePopupId } from 'Store/Popup/Popup.action';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  updateActivePopupId: (activePopupId) => dispatch(updateActivePopupId(activePopupId)),
});

export const ChatBoardPage = () => (
  <div>
    ChatBoardPage
  </div>
);

export default compose(
  memo,
  connect(mapStateToProps, mapDispatchToProps),
)(ChatBoardPage);
