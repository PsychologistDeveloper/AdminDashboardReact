export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const CHAT_BOARD_UPDATE_QUESTIONS_DOCS = 'CHAT_BOARD_UPDATE_QUESTIONS_DOCS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const UPDATE_IS_QUESTIONS_LOADING = 'UPDATE_IS_QUESTIONS_LOADING';
export const UPDATE_IS_FORMULATION_LOADING = 'UPDATE_IS_FORMULATION_LOADING';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_FORMULATIONS = 'UPDATE_FORMULATIONS';
export const ON_ADMIN_SAVE_QUESTION = 'ON_ADMIN_SAVE_QUESTION';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const UPDATE_IS_ALL_CHAT_BOARD_LOADED = 'UPDATE_IS_ALL_CHAT_BOARD_LOADED';

export const setActiveNavigationTab = (tabId) => ({
    type: SET_ACTIVE_TAB,
    tabId,
});

export const updateQuestions = (questionsData) => ({
    type: UPDATE_QUESTIONS,
    questionsData,
});

export const addNewQuestion = (question) => ({
    type: ADD_NEW_QUESTION,
    question,
});

export const updateIsAllChatboardLoaded = (isAllCBLoaded) => ({
    type: UPDATE_IS_ALL_CHAT_BOARD_LOADED,
    isAllCBLoaded
});

export const deleteQuestion = (questionId) => ({
    type: DELETE_QUESTION,
    questionId,
});

export const updateAnswers = (answers, formulationId) => ({
    type: UPDATE_ANSWERS,
    answers,
    formulationId,
});

export const updateIsQuestionsLoading = (isQuestionsLoading) => ({
    type: UPDATE_IS_QUESTIONS_LOADING,
    isQuestionsLoading,
});

export const updateIsFormulationLoading = (isFormulationLoading) => ({
    type: UPDATE_IS_FORMULATION_LOADING,
    isFormulationLoading,
});

export const updateFormulation = (formulations) => ({
    type: UPDATE_FORMULATIONS,
    formulations,
});

export const onAdminSaveQuestion = (qstId, data) => ({
    type: ON_ADMIN_SAVE_QUESTION,
    qstId,
    data
});
