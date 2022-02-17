import React from 'react';

import WithChatBoardRenders from 'Hoc/WithChatBoardRenders';
import ChatBoardQuestionItem from 'Components/ChatBoardQuestionItem';
import ChatBoardQuestionPopup from 'Components/ChatBoardQuestionPopup';
import ChatBoardSkeleton from 'Components/Skeletons/ChatBoardSkeleton/ChatBoardSkeleton';

import './ChatBoardQuestions.style.scss';

export const ChatBoardQuestions = (props) => {
    const {
        renderAddItemBtn,
        openAddQuestionPopup,
        activeTabId,
        questions,
        isQuestionsLoading,
        isAllCBLoaded,
        isEdittingPopupType,
        setIsEdittingPopupType,
        setEdittingQstId,
        edittingQstId,
        getNextPortion
    } = props;

    function renderQuestionsPlaceholder() {
        return <ChatBoardSkeleton />;
    }

    function renderLoadMore() {
        if (isAllCBLoaded || !Object.keys(questions).length) {
            return null;
        }

        return (
            <div className="TranslationPage-ButtonWrapper">
                <button
                  onClick={ () => getNextPortion() }
                >
                    Load more
                </button>
            </div>
        );
    }


    function renderEmptyQuestionsSection() {
        return (
            <p className="ChatBoardQuestions-EmptyQstMsg">
                Add a question
            </p>
        );
    }

    function renderQuestionsSection() {
        const areQstsExist = !!Object.keys(questions).length;

        if (isQuestionsLoading && !areQstsExist) {
            return renderQuestionsPlaceholder();
        }

        if (!areQstsExist) {
            return renderEmptyQuestionsSection();
        }

        return (
            <div className="ChatBoardQuestions-QuestionsSection">
                { renderDateSections() }
            </div>
        );
    }

    function renderDateSection({ date, items }) {
        const dateTxt = date.toString().slice(4, 15);

        return (
            <div
              key={ dateTxt }
            >
                <h2>
                    { dateTxt }
                </h2>
                { renderQuestions(items) }
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

    function renderQuestion({ data, id }) {
        return (
            <div
                className="ChatBoardQuestions-Question"
                key={id}
            >
                <ChatBoardQuestionItem
                    {...{ ...data, id }}
                    isQuestionsLoading={ isQuestionsLoading }
                    setIsEdittingPopupType={setIsEdittingPopupType}
                    edittingQstId={edittingQstId}
                    setEdittingQstId={setEdittingQstId}
                />
            </div>
        );
    }

    function renderAddQuestionPopup() {
        return (
            <ChatBoardQuestionPopup
                tabId={activeTabId}
                isEdittingPopupType={isEdittingPopupType}
                edittingQstId={edittingQstId}
            />
        );
    }

    function renderContent() {
        return (
            <>
                { renderAddQuestionPopup() }
                { renderAddItemBtn('Add Question', openAddQuestionPopup) }
                { renderQuestionsSection() }
            </>
        );
    }

    return (
        <div className="ChatBoardQuestions">
            { renderContent() }
            { renderLoadMore() }
        </div>
    );
};

export default WithChatBoardRenders(ChatBoardQuestions);
