import React from 'react';
import { connect } from 'react-redux';

import { updateIsApproved } from 'Store/Translations/Translations.dispatcher';

import TranslationQstActions from './TranslationQstActions.component';

export const mapStateToProps = (state) => ({
    questions: state.TranslationsReducer.questions,
});

export const mapDispatchToProps = (dispatch) => ({
    updateIsApproved: (isApproved, qstId) => updateIsApproved(dispatch, isApproved, qstId)
});


export const TranslationQstActionsContainer = (props) => {
    const { updateIsApproved } = props;

    function onApproveClick(isApproved, qstId) {
        updateIsApproved(isApproved, qstId);
    }

    const containerProps = () => {

        return {
            ...props,
        };
    }

    const containerFunctions = {
        onApproveClick
    }

    return <TranslationQstActions
      { ...containerProps() }
      { ...containerFunctions }
    />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationQstActionsContainer);
