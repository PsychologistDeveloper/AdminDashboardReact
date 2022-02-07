import {
    UPDATE_QUESTIONS,
    UPDATE_IS_QUESTIONS_LOADING,
    DELETE_QUESTION,
    ON_ADMIN_SAVE_QUESTION,
    ADD_NEW_QUESTION,
    UPDATE_IS_ALL_CHAT_BOARD_LOADED
} from './ChatBoard.action';

const updateQuestions = (state, action) => {
    const {
        questionsData: {
            docsData,
            docs: questionsDocs
        }
    } = action;

    const {
        questions: prevQuestions
    } = state;

    const questions = prevQuestions.length
        ? [...prevQuestions, ...docsData]
        : docsData;

    return {
        ...state,
        questions,
        questionsDocs
    }
}

const addQst = (state, action) => {
    const {
        question
    } = action;

    const { questions: prevQsts } = state;

    const questions = prevQsts && prevQsts.length
        ? [ ...prevQsts, question ]
        : [ question ];

    return {
        ...state,
        questions
    }
}

const onAdminSaveQuestion = (state, action) => {
    const {
        qstId,
        data: {
            questionInput,
            answerInput
        }
    } = action;

    const {
        questions: prevQsts
    } = state;

    const questions = [...prevQsts];
    questions.forEach((qst, i) => {
        const { id, data } = qst;

        if (id === qstId) {
            if (questionInput) {
                questions[i].data.questionInput = questionInput;
            } else {
                questions[i].data.answerInput = answerInput;
            }
        }
    });

    return {
        ...state,
        questions
    }
}

const deleteQuestion = (state, action) => {
    const { questionId } = action;
    const { questions: prevQuestions } = state;

    const questions = prevQuestions.filter(({ id }) => id !== questionId);

    return {
        ...state,
        questions,
    };
};

const getInitialState = () => ({
    questions: [],
    questionsDocs: [],
    isQuestionsLoading: false,
    isAllCBLoaded: false
});

export const ChatBoardReducer = (
    state = getInitialState(),
    action,
) => {

    switch (action.type) {
        case UPDATE_QUESTIONS:
            return updateQuestions(state, action);

        case ADD_NEW_QUESTION:
            return addQst(state, action);

        case DELETE_QUESTION:
            return deleteQuestion(state, action);

        case ON_ADMIN_SAVE_QUESTION:
            console.log(532121);
            return onAdminSaveQuestion(state, action);

        case UPDATE_IS_QUESTIONS_LOADING:
            const { isQuestionsLoading } = action;

            return {
                ...state,
                isQuestionsLoading,
            };

        case UPDATE_IS_ALL_CHAT_BOARD_LOADED:
            const { isAllCBLoaded } = action;

            return {
                ...state,
                isAllCBLoaded,
            };

        default:
            return state;
    }
};

export default ChatBoardReducer;
