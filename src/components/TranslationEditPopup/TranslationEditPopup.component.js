import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import Loader from 'Components/Loader';
import Popup from 'Components/Popup';

import { TRANSLATION_EDIT_POPUP } from './TranslationEditPopup.config';

import './TranslationEditPopup.style.scss';

export const TranslationEditPopup = (props) => {
    const {
        isLoading,
        onInputChange,
        onEditClick,
        qstTranslations,
        question
    } = props;

    function renderEdit() {
        return (
            <div className="ChatBoardQuestionPopup-AddQstButton">
                <Button
                    variant="outlined"
                    onClick={onEditClick}
                >
                    Edit
                </Button>
            </div>
        );
    }

    function renderAddInput(placeholder, value, onChange) {
        return (
            <div className="ChatBoardQuestionPopup-Input">
                <Input
                    autoFocus
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    }

    function renderSingleEditInput(title, [lang, val]) {
        return (
            <div
              key={ title }
            >
                <p>
                    { lang }
                </p>
                { renderAddInput(
                    `Edit ${ lang } ${ title }`,
                    val,
                    (val) => onInputChange(title, lang, val)
                ) }
            </div>
        );
    }

    function renderEditInputs(title, data) {
        if (!data) {
            return null;
        }

        return Object.entries(data)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((langItem) => renderSingleEditInput(title, langItem));
    }


    function renderSingleArea(title, data) {
        return (
            <div className="TranslationEditPopup-Area">
                <h4 className="TranslationEditPopup-AreaTitle">
                    { title }:
                </h4>
                { renderEditInputs(title, data) }
            </div>
        );
    }

    function renderPopupContent() {
        const answerAreaKey = 'answer';
        const questionAreaKey = 'question';

        const {
            [answerAreaKey]: answer,
            [questionAreaKey]: question
        } = qstTranslations;

        return (
            <div>
                { renderSingleArea(questionAreaKey, question) }
                { renderSingleArea(answerAreaKey, answer) }
                { renderEdit() }
            </div>
        );
    }

    if (!Object.keys(question).length) {
        return null;
    }

    return (
        <Popup
            popupId={TRANSLATION_EDIT_POPUP}
            hookClasses={['TranslationEditPopup']}
        >
            <div className="TranslationEditPopup"
            >
                { renderPopupContent() }
            </div>
            <Loader isLoading={isLoading} />
        </Popup>
    );
};
export default TranslationEditPopup;
