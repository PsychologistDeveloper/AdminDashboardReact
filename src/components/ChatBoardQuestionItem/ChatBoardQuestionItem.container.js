import React, { useState } from 'react';
import { connect } from 'react-redux';

import { CHATBOARD_ADD_QUESTION_POPUP } from 'Components/ChatBoardQuestionPopup/ChatBoardQuestionPopup.config';
import { deleteQuestion } from 'Store/ChatBoard/ChatBoard.dispatcher';
import { updateActivePopupId } from 'Store/Popup/Popup.dispatcher';

import ChatBoardQuestionItem from './ChatBoardQuestionItem.component';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (questionId) => deleteQuestion(dispatch, questionId),
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

  const [isLoading, setIsLoading] = useState(false);

  async function removeQuestion(questionId) {
    setIsLoading(true);
    await deleteQuestion(questionId);
    setIsLoading(false);
  }

  function openEdittingPopup() {
    setIsEdittingPopupType(true);
    setEdittingQstId(id);
    openPopup(CHATBOARD_ADD_QUESTION_POPUP);
  }

  const containerProps = () => ({
    ...props,
    isLoading,
  });

  const containerFunctions = {
    removeQuestion,
    openEdittingPopup,
  };

  return (
    <ChatBoardQuestionItem
      {...containerProps()}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardQuestionItemContainer);
