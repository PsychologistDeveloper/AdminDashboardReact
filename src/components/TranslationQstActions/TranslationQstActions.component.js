import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';

import './TranslationQstActions.styles.scss';

export const TranslationQstActionsComponent = (props) => {
    const {
        question: {
            id,
            data: {
                isApproved,
                isEddited
            }
        },
        question,
        onEditClick,
        onApproveClick,
    } = props;

    function renderIsEdditedCheck() {
        if (!isEddited) {
            return null;
        }

        return <DoneIcon color="success"/>;
    }

    function renderApproveBtn() {
        const variant = isApproved
            ? 'contained'
            : 'outlined';
        const color = isApproved
            ? 'success'
            : 'primary';
        const text = isApproved
            ? 'Approved'
            : 'Approve';

        return (
            <Button
              variant={ variant }
              color={ color }
              size="small"
              className="TranslationQstActions-ApproveBtn"
              onClick={ () => onApproveClick(!isApproved, id) }
            >
                { text }
            </Button>
        );
    }

    function renderEditPopupOpen() {
        return (
            <Button
              onClick={() => onEditClick(question)}
              size="small"
              variant="outlined"
              className="TranslationQstActions-EditBtn"
            >
                Edit translations
            </Button>
        );
    }

    return (
        <div className='TranslationQstActions'>
            { renderIsEdditedCheck() }
            { renderApproveBtn() }
            { renderEditPopupOpen() }
        </div>
    );
};

export default TranslationQstActionsComponent;
