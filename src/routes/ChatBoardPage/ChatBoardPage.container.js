import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
    isLoggedIn: state.AdminReducer.isLoggedIn,
    uid: state.AdminReducer.admin?.uid,
    admin: state.AdminReducer.admin,
});

export const mapDispatchToProps = (dispatch) => ({
});

export const ChatBoardPageContainer = (props) => {
    const containerProps = () => ({
    });

    const containerFunctions = {
    };

    return (
        <ChatBoardPage
            {...containerProps()}
            {...containerFunctions}
        />
    );
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect(),
)(ChatBoardPageContainer);
