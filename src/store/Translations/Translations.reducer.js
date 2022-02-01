import {
    UPDATE_QUESTIONS_DATA,
    UPDATE_IS_ALL_LOADED,
    UPDATE_IS_LOADING,
    UPDATE_IS_EDDITED_QUESTION,
    UPDATE_IS_APPROVED_QUESTION,
    UPDATE_QUESTION_BY_ID
} from './Translations.action';

export const LEFT_DIRECTION = 'left_dir';
export const RIGHT_DIRECTION = 'right_dir'

const updateQuestionsData = (state, action) => {
    const {
        questionsData: {
            docs: questionsDocs,
            docsData
        },
        isInitial
    } = action;

    const { questions: prevQuestions } = state;

    const questions = isInitial
        ? docsData
        : [ ...prevQuestions, ...docsData ];

    return {
        ...state,
        questions,
        questionsDocs
    };
}

const updateQuestionByID = (state, action) => {
    const {
        qstId,
        questionData: {
            answer,
            question
        }
    } = action;

    const { questions: prevQuestions } = state;

    const questions = [ ...prevQuestions ];

    questions.forEach(({ id }, i) => {
        if (id === qstId) {
            questions[i].data.answer = answer;
            questions[i].data.question = question;
        }
    });


    return {
        ...state,
        questions
    }
}

const updatedEdditedApprovedFlags = (state, action) => {
    const { questions: prevQuestions } = state;
    const { qstId, isEddited, isApproved } = action;

    const updatedQst = prevQuestions
        .filter(({ id }) => id === qstId)[0];

        if (typeof isApproved === 'boolean') {
            updatedQst.data.isApproved = isApproved;
        } else if (typeof isEddited === 'boolean') {
            updatedQst.data.isEddited = isEddited;
        }

    const questionsWithoutTargeted = prevQuestions.filter(({ id }) => id !== qstId);
    const questions = [ ...questionsWithoutTargeted, updatedQst ];

    return {
        ...state,
        questions
    };
}

const getInitialState = () => ({
    questions: [],
    questionsDocs: [],
    isLoading: false,
    isAllLoaded: false
});

export const TranslationsReducer = (
    state = getInitialState(),
    action,
) => {
    const { isLoading, isAllLoaded } = action;

    switch (action.type) {
        case UPDATE_QUESTIONS_DATA:
            return updateQuestionsData(state, action);

        case UPDATE_IS_EDDITED_QUESTION:
            return updatedEdditedApprovedFlags(state, action);

        case UPDATE_IS_APPROVED_QUESTION:
            return updatedEdditedApprovedFlags(state, action);

        case UPDATE_QUESTION_BY_ID:
            return updateQuestionByID(state, action);

        case UPDATE_IS_ALL_LOADED:
            return {
                ...state,
                isAllLoaded
            }

        case UPDATE_IS_LOADING:
            return {
                ...state,
                isLoading
            };

        default:
            return state;
        }
};

export default TranslationsReducer;
