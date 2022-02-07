import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { CHATBOARD_ADD_QUESTION_POPUP } from 'Components/ChatBoardQuestionPopup/ChatBoardQuestionPopup.config';
import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';
import { getQuestionsForAdmin } from 'Store/ChatBoard/ChatBoard.dispatcher';

import { sortTranslationsByDate } from 'Utils/Translations';

import ChatBoardQuestions from './ChatBoardQuestions.component';

export const mapStateToProps = (state) => ({
    questions: state.ChatBoardReducer.questions,
    questionsDocs: state.ChatBoardReducer.questionsDocs,
    isQuestionsLoading: state.ChatBoardReducer.isQuestionsLoading,
    isAllCBLoaded: state.ChatBoardReducer.isAllCBLoaded,
    adminId: state.AdminReducer.admin.uid,
});

export const mapDispatchToProps = (dispatch) => ({
    openPopup: (popupId) => updateActivePopupId(dispatch, popupId),
    getQuestionsForAdmin: (adminId, docs, isInitial) => getQuestionsForAdmin(dispatch, adminId, docs, isInitial),
});

export const ChatBoardQuestionsContainer = (props) => {
    const {
        questionsDocs,
        openPopup,
        getQuestionsForAdmin,
        adminId,
        questions
    } = props;

    const [isEdittingPopupType, setIsEdittingPopupType] = useState(false);
    const [edittingQstId, setEdittingQstId] = useState('');

    useEffect(() => {
        getQuestionsForAdmin(adminId, null, true);
    }, []);

    function openAddQuestionPopup() {
        setIsEdittingPopupType(false);
        setTimeout(() => openPopup(CHATBOARD_ADD_QUESTION_POPUP));
    }

    function getNextPortion() {
        getQuestionsForAdmin(adminId, questionsDocs);
    }

    const containerFunctions = {
        openAddQuestionPopup,
        setIsEdittingPopupType,
        setEdittingQstId,
        getNextPortion
    };

    const containerProps = () => {
        const sortedQsts = sortTranslationsByDate(questions);

        return {
            ...props,
            questions: sortedQsts,
            isEdittingPopupType,
            edittingQstId,
        }
    };

    return (
        <ChatBoardQuestions
            {...containerProps()}
            {...containerFunctions}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardQuestionsContainer);
