import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { CHATBOARD_ADD_QUESTION_POPUP } from 'Components/ChatBoardQuestionPopup/ChatBoardQuestionPopup.config';
import { deleteQuestion, saveEditQst } from 'Store/ChatBoard/ChatBoard.dispatcher';
import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';
import { getServerTimestamp } from 'Utils/Firebase';

import ChatBoardQuestionItem from './ChatBoardQuestionItem.component';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
    deleteQuestion: (questionId) => deleteQuestion(dispatch, questionId),
    saveEditQst: (questionId, data) => saveEditQst(dispatch, questionId, data),
    openPopup: (popupId) => updateActivePopupId(dispatch, popupId),
});

export const ChatBoardQuestionItemContainer = (props) => {
    const {
        id,
        deleteQuestion,
        setIsEdittingPopupType,
        openPopup,
        setEdittingQstId,
    } = props;

    const qstTitleRef = useRef();
    const qstInputRef = useRef();
    const answerTitleRef = useRef();
    const answerInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [isQstInputShown, setIsQstInputShown] = useState(false);
    const [isAnswerInputShown, setIsAnswerInputShown] = useState(false);

    const [answerInputState, setAnswerInput] = useState(null);
    const [questionInputState, setQuestionInput] = useState(null);

    useEffect(() => {
        const {
            answerInput,
            questionInput
        } = props;

        if (answerInputState === null && answerInput) {
            setAnswerInput(answerInput);
        } else if (questionInputState === null && questionInput) {
            setQuestionInput(questionInput);
        }
    });

    function onDbClick(e) {
        if (e.target === qstTitleRef.current) {
            setIsQstInputShown(true);
        } else if (e.target === answerTitleRef.current) {
            setIsAnswerInputShown(true);
        }
    }

    function onEditClick(ref) {
        if (ref.current === qstTitleRef.current) {
            setIsQstInputShown(true);
        } else if (ref.current === qstTitleRef.current) {
            setIsAnswerInputShown(true);
        }
    }

    function onSaveClick(ref) {
        const { saveEditQst } = props;

        const updated_at = getServerTimestamp();

        if (ref.current === qstTitleRef.current) {
            saveEditQst(
                id,
                {
                    questionInput: questionInputState,
                    updated_at
                }
            );
            setIsQstInputShown(false);
        } else if (ref.current === answerTitleRef.current) {
            saveEditQst(
                id,
                {
                    answerInput: answerInputState,
                    updated_at
                }
            );
            setIsAnswerInputShown(false);
        }
    }

    async function removeQuestion(questionId) {
        setIsLoading(true);
        await deleteQuestion(questionId);
        setIsLoading(false);
    }

    async function openEdittingPopup() {
        setIsEdittingPopupType(true);
        setEdittingQstId(id);
        openPopup(CHATBOARD_ADD_QUESTION_POPUP);
    }

    const containerProps = () => ({
        ...props,
        answerInputState,
        questionInputState,
        isLoading,
        qstTitleRef,
        qstInputRef,
        answerTitleRef,
        answerInputRef,
        isQstInputShown,
        isAnswerInputShown
    });

    const containerFunctions = {
        removeQuestion,
        openEdittingPopup,
        onDbClick,
        onEditClick,
        onSaveClick,
        setAnswerInput,
        setQuestionInput
    };

    return (
        <ChatBoardQuestionItem
            {...containerProps()}
            {...containerFunctions}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardQuestionItemContainer);
