import React from 'react';

import Loader from 'Components/Loader';
import TranslationQstActions from 'Components/TranslationQstActions';

import './TranslationPage.style.scss';

export const TranslationPageComponent = (props) => {
    const {
        getNextPortion,
        questions,
        isAllLoaded,
        isLoading
    } = props;

    function renderQuestion(questionData) {
        const { data: { question: { en } } } = questionData;

        return (
            <div className="ChatBoardQuestionItem">
                <h4>
                    { en }
                </h4>
                <div>
                    <TranslationQstActions question={ questionData } />
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
                console.log(a[0], b[0]);
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
            <div>
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
                if (a.data.created_at.seconds > b.data.created_at.seconds) {
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

    return (
        <div className="TranslationPage ChatBoardPage">
            { renderLoader() }
            { renderDateSections() }
            { renderActions() }
        </div>
    );
};

export default TranslationPageComponent;
