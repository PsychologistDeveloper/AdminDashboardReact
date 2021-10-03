import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { addQuestion, addQuestionFormulation, getQuestionFormulation } from 'Store/ChatBoard/ChatBoard.dispatcher';

import { updateActivePopupId } from 'Store/Popup/Popup.action';

import ChatBoardQuestionPopup from './ChatBoardQuestionPopup.component';

export const mapStateToProps = (state) => ({
  adminId: state.AdminReducer.admin.docId,
  psychotypes: state.PsychoTypesReducer.psychotypes,
  formulation: state.ChatBoardReducer.formulation,
  isFormulationLoading: state.ChatBoardReducer.isFormulationLoading,
});

export const mapDispatchToProps = (dispatch) => ({
  addQuestion: (questionData) => addQuestion(dispatch, questionData),
  closePopup: () => dispatch(updateActivePopupId('')),
  addQuestionFormulation: (
    questionId, psychotypeId, formulation,
  ) => addQuestionFormulation(dispatch, questionId, psychotypeId, formulation),
  getQuestionFormulation: (
    questionId, psychotypeId,
  ) => getQuestionFormulation(dispatch, questionId, psychotypeId),
});

export const ChatBoardQuestionPopupContainer = (props) => {
  const {
    psychotypes,
    addQuestion,
    addQuestionFormulation,
    getQuestionFormulation,
    tabId,
    edittingQstId,
    adminId,
    closePopup,
    formulation,
  } = props;

  const [questionAddInputVal, setQuestionAddInputVal] = useState('');
  const [formulationInputVal, setFormulationInputVal] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [prevEdittingQstId, setPrevEdittingQstId] = useState(null);
  const [isLoading, setIsLoading] = useState('');

  useEffect(() => {
    let newFormulation = '';

    if (prevEdittingQstId === edittingQstId) {
      newFormulation = formulation;
    } else {
      setSelectValue('');
    }

    setFormulationInputVal(newFormulation);
    setPrevEdittingQstId(edittingQstId);
  }, [formulation, edittingQstId]);

  function onQuestionAddChange(e) {
    setQuestionAddInputVal(e.target.value);
  }

  function onFormulationChange(e) {
    setFormulationInputVal(e.target.value);
  }

  async function onSelectChange(e) {
    const val = e.target.value;

    setSelectValue(val);

    setIsLoading(true);
    await getQuestionFormulation(edittingQstId, val);
    setIsLoading(false);
  }

  async function onFormulationAddClick() {
    setIsLoading(true);
    await addQuestionFormulation(edittingQstId, selectValue, formulationInputVal);
    setIsLoading(false);
  }

  async function onQuestionAddClick() {
    const questionData = {
      name: questionAddInputVal,
      adminId,
      tabId,
    };

    setIsLoading(true);
    const isQuestionAdded = await addQuestion(questionData);
    setQuestionAddInputVal('');
    setIsLoading(false);

    if (isQuestionAdded) {
      closePopup();
    }
  }

  const containerProps = () => {
    const {
      data: {
        name: activePsychotypeName,
      } = {},
    } = psychotypes.filter(({ id }) => id === selectValue)[0] || {};

    return {
      ...props,
      questionAddInputVal,
      formulationInputVal,
      selectValue,
      activePsychotypeName,
      isLoading,
    };
  };

  const containerFunctions = {
    onQuestionAddChange,
    onQuestionAddClick,
    onSelectChange,
    onFormulationChange,
    onFormulationAddClick,
  };

  return (
    <ChatBoardQuestionPopup
      {...containerProps()}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardQuestionPopupContainer);
