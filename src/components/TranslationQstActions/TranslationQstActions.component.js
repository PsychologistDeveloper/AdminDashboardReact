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
              onClick={ () => onApproveClick(!isApproved, id) }
            >
                { text }
            </Button>
        );
    }

    function renderEditPopupOpen() {

    }

    return (
        <div className='TranslationQstActions'>
            { renderIsEdditedCheck() }
            { renderApproveBtn() }
        </div>
    );
};

export default TranslationQstActionsComponent;
