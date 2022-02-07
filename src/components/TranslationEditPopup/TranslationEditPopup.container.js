import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { addQuestion } from 'Store/ChatBoard/ChatBoard.dispatcher';
import { pushNotification } from 'Store/Notification/Notification.dispatcher';
import { updateActivePopupId } from 'Store/Popup/Popup.action';
import { updateTranslations } from 'Store/Translations/Translations.dispatcher';

import TranslationEditPopup from './TranslationEditPopup.component';

export const mapStateToProps = (state) => ({
    adminId: state.AdminReducer.admin.docId,
    psychotypes: state.PsychoTypesReducer.psychotypes,
    questions: state.ChatBoardReducer.questions,
    formulations: state.ChatBoardReducer.formulations,
    isFormulationLoading: state.ChatBoardReducer.isFormulationLoading,
    isLoading: state.TranslationsReducer.isLoading,
});

export const mapDispatchToProps = (dispatch) => ({
    addQuestion: (questionData) => addQuestion(dispatch, questionData),
    closePopup: () => dispatch(updateActivePopupId('')),
    pushNotification: (type, message) => pushNotification(dispatch, type, message),
    updateTranslations: (qstTranslations, qstId) => updateTranslations(dispatch, qstTranslations, qstId),
});

export const TranslationEditPopupContainer = (props) => {
    const {
        updateTranslations,
        question
    } = props;

    const [state, setState] = useState({
        qstId: '',
        qstTranslations: {}
    });

    useEffect(() => {
        _onDifferentQst();
    });

    // for all inputs
    function onInputChange(area, lang, val) {
        const {
            qstTranslations
        } = state;

        setState({
            ...state,
            qstTranslations: {
                ...qstTranslations,
                [area]: {
                    ...qstTranslations[area],
                    [lang]: val
                }
            }
        });
    }

    // changes the question data in state if it's different
    function _onDifferentQst() {
        const {
            id,
            data: {
                answer,
                question: questionTranslation
            } = {}
        } = question || {};
        const { qstId } = state;

        if (qstId !== id) {
            const qstTranslations = {
                answer,
                question: questionTranslation
            };

            setState({
                ...state,
                qstId: id,
                qstTranslations
            });
        }
    }

    function onEditClick() {
        const { id } = question;
        const { qstTranslations } = state;

        updateTranslations(qstTranslations, id);
    }

    const containerProps = () => {
        const { qstTranslations } = state;

        return {
            ...props,
            qstTranslations
        }
    };

    const containerFunctions = {
        onInputChange,
        onEditClick
    };

    return (
        <TranslationEditPopup
            {...containerProps()}
            {...containerFunctions}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslationEditPopupContainer);
