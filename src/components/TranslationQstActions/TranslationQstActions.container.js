import React from 'react';
import { connect } from 'react-redux';

import { updateIsApproved } from 'Store/Translations/Translations.dispatcher';
import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';
import { TRANSLATION_EDIT_POPUP } from 'Components/TranslationEditPopup/TranslationEditPopup.config';

import TranslationQstActions from './TranslationQstActions.component';

export const mapStateToProps = (state) => ({
    questions: state.TranslationsReducer.questions,
});

export const mapDispatchToProps = (dispatch) => ({
    updateIsApproved: (isApproved, qstId) => updateIsApproved(dispatch, isApproved, qstId),
    openPopup: (popupId) => updateActivePopupId(dispatch, popupId),
});


export const TranslationQstActionsContainer = (props) => {
    const {
        updateIsApproved,
        openPopup,
        setEdittingQst
    } = props;

    function onApproveClick(isApproved, qstId) {
        updateIsApproved(isApproved, qstId);
    }

    function onEditClick(qst) {
        setEdittingQst(qst);
        openPopup(TRANSLATION_EDIT_POPUP);
    }

    const containerProps = () => {

        return {
            ...props,
        };
    }

    const containerFunctions = {
        onApproveClick,
        onEditClick,
    }

    return <TranslationQstActions
      { ...containerProps() }
      { ...containerFunctions }
    />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationQstActionsContainer);
