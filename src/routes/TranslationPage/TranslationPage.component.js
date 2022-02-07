import React from 'react';

import Loader from 'Components/Loader';
import TranslationQstActions from 'Components/TranslationQstActions';
import TranslationEditPopup from 'Components/TranslationEditPopup';

import './TranslationPage.style.scss';

export const TranslationPageComponent = (props) => {
    const {
        getNextPortion,
        setEdittingQst,
        questions,
        edittingQst,
        isAllLoaded,
        isLoading
    } = props;

    function renderQuestion(questionData) {
        const { data: { question: { en } } } = questionData;

        return (
            <div
              key={ en }
              className="ChatBoardQuestionItem"
            >
                <h4>
                    { en }
                </h4>
                <div>
                    <TranslationQstActions
                      question={ questionData }
                      setEdittingQst={ setEdittingQst }
                    />
                </div>
            </div>
        );
    }

    function renderDateSections() {
        if (!Object.keys(questions).length) {
            return null;
        }

        return Object
            .entries(questions)
            .sort((a, b) => {
                if (a[0] > b[0]) {
                    return -1;
                }

                return 0;
            })
            .map((qstSectionData) => renderDateSection(qstSectionData[1]));
    }

    function renderDateSection({ date, items }) {
        const dateTxt = date.toString().slice(4, 15);

        return (
            <div
              key={ dateTxt }
            >
                <h3>
                    { dateTxt }
                </h3>
                { renderQuestions(items) }
            </div>
        );
    }

    function renderQuestions(items) {
        return items
            .sort((a, b) => {
                if (a.data.updated_at.seconds > b.data.updated_at.seconds) {
                    return -1;
                }

                return 0;
            })
            .map((question) => renderQuestion(question));
    }

    function renderActions() {
        if (isAllLoaded || !Object.keys(questions).length) {
            return null;
        }

        return (
            <div className="TranslationPage-ArrowsWrapper">
                <button
                  onClick={ () => getNextPortion() }
                >
                    Load more
                </button>
            </div>
        );
    }

    function renderLoader() {
        return <Loader isLoading={ isLoading } />;
    }

    function renderEditPopup() {
        return <TranslationEditPopup
          question={ edittingQst }
        />;
    }

    return (
        <div className="TranslationPage ChatBoardPage">
            { renderLoader() }
            { renderDateSections() }
            { renderActions() }
            { renderEditPopup() }
        </div>
    );
};

export default TranslationPageComponent;
