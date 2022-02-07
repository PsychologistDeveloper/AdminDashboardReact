import React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteButton from '@mui/icons-material/DeleteOutline';
import PencilIcon from '@mui/icons-material/Create';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Input from '@mui/material/Input';

import Loader from 'Components/Loader';

import './ChatBoardQuestionItem.style.scss';

export const ChatBoardQuestionItem = (props) => {
    const {
        questionInput,
        answerInput,
        answerInputState,
        questionInputState,
        isQstInputShown,
        isAnswerInputShown,
        onDbClick,
        qstTitleRef,
        answerTitleRef,
        id,
        removeQuestion,
        isQuestionsLoading,
        onEditClick,
        onSaveClick,
        qstInputRef,
        answerInputRef,
        setAnswerInput,
        setQuestionInput
    } = props;

    const buttonsMap = [
        {
            Component: DeleteButton,
            action: () => removeQuestion(id),
            isActive: true,
        },
    ];

    const blocksMap = [
        {
            title: questionInput,
            placeholder: 'edit question...',
            ref: qstTitleRef,
            value: questionInputState,
            onChange: setQuestionInput,
            isInputShown: isQstInputShown,
            onDbClick,
            inputRef: qstInputRef
        },
        {
            title: answerInput,
            placeholder: 'edit answer...',
            ref: answerTitleRef,
            value: answerInputState,
            onChange: setAnswerInput,
            isInputShown: isAnswerInputShown,
            onDbClick,
            inputRef: answerInputRef
        }
    ];

    const renderButtons = () => buttonsMap.map(({ Component, action, isActive }, i) => (
        <IconButton
            key={i}
            onClick={action}
            size="small"
            className={`ChatBoardTabItem-Button ${isActive && 'ChatBoardTabItem-Button_isActive'}`}
        >
            <Component />
        </IconButton>
    ));

    function renderEditBtn(ref) {
        return (
            <IconButton
              onClick={() => onEditClick(ref)}
              size="small"
              className={'ChatBoardQuestionItem-EditBtn'}
            >
                <PencilIcon />
            </IconButton>
        );
    }

    function renderInputsBlock({
        title,
        placeholder,
        ref,
        value,
        onChange,
        isInputShown,
        onDbClick,
        inputRef
    }) {
        return (
            <div>
                { !isInputShown
                    && <h3
                      className="ChatBoardQuestionItem-Name"
                      onDoubleClick={onDbClick}
                      ref={ ref }
                    >
                        {title}
                        { renderEditBtn(ref) }
                    </h3>
                }
                { isInputShown
                    && <div>
                        <Input
                          autoFocus
                          placeholder={placeholder}
                          value={value}
                          ref={ inputRef }
                          onChange={(e) => onChange(e.target.value)}
                        />
                        <IconButton
                          onClick={() => onSaveClick(ref)}
                          size="small"
                        >
                            <SaveOutlinedIcon />
                        </IconButton>
                    </div>
                }
            </div>
        );
    }

    function renderBlocks() {
        return blocksMap.map(renderInputsBlock);
    }

    function renderContent() {
        const isLoading = isQuestionsLoading || isLoading;

        return (
            <>
                <Loader isLoading={isLoading} />
                { renderBlocks() }
                <div className="ChatBoardQuestionItem-Actions">
                    { renderButtons() }
                </div>
            </>
        );
    }

    return (
        <div className="ChatBoardQuestionItem">
            { renderContent() }
        </div>
    );
};

export default ChatBoardQuestionItem;
