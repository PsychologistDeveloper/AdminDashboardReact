import React from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';

import Loader from 'Components/Loader';
import Popup from 'Components/Popup';
import Select from 'Components/Select';

import { CHATBOARD_ADD_QUESTION_POPUP } from './ChatBoardQuestionPopup.config';

import './ChatBoardQuestionPopup.style.scss';

export const ChatBoardQuestionPopup = (props) => {
  const {
    psychotypes,
    questionAddInputVal,
    formulationInputVal,
    selectValue,
    activePsychotypeName,
    isEdittingPopupType,
    isLoading,
    onQuestionAddChange,
    onQuestionAddClick,
    onSelectChange,
    onFormulationChange,
    onFormulationAddClick,
  } = props;

  function renderAddBoardItemBtn(onClick) {
    return (
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    );
  }

  function renderPsychotypeOption({ data: { name }, id }) {
    return (
      <MenuItem
        key={id}
        value={id}
      >
        { name }
      </MenuItem>
    );
  }

  function renderEdditingQuestionType() {
    return (
      <>
        <Select
          id="ChatBoard-PsychotypesSelect"
          label="Type"
          value={selectValue}
          onChange={onSelectChange}
        >
          { psychotypes.map(renderPsychotypeOption) }
        </Select>
        { renderChangeFormulationInput() }
      </>
    );
  }

  function renderChangeFormulationInput() {
    const placeholderText = activePsychotypeName
      ? `Question formulation for ${activePsychotypeName} psychotype...`
      : 'Select a psychotype';

    return renderAddInput(
      placeholderText,
      formulationInputVal,
      onFormulationChange,
      onFormulationAddClick,
      !activePsychotypeName,
    );
  }

  function renerAddQuestionType() {
    return renderAddInput(
      'Enter a new question name...',
      questionAddInputVal,
      onQuestionAddChange,
      onQuestionAddClick,
    );
  }

  function renderAddInput(placeholder, value, onChange, onClick, isDisabled = false) {
    return (
      <div className="ChatBoardQuestionPopup-Input">
        <Input
          autoFocus
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
        { renderAddBoardItemBtn(onClick) }
      </div>
    );
  }

  function renderPopupContent() {
    if (isEdittingPopupType) {
      return renderEdditingQuestionType();
    }

    return renerAddQuestionType();
  }

  return (
    <Popup
      popupId={CHATBOARD_ADD_QUESTION_POPUP}
      hookClasses={['ChatBoardQuestionPopup']}
    >
      <div className={`ChatBoardQuestionPopup ${
        isEdittingPopupType
          ? 'ChatBoardQuestionPopup_isEditting'
          : ''}`}
      >
        { renderPopupContent() }
      </div>
      <Loader isLoading={isLoading} />
    </Popup>
  );
};
export default ChatBoardQuestionPopup;
