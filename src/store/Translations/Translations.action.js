export const UPDATE_QUESTIONS_DATA = 'UPDATE_QUESTIONS_DATA';
export const UPDATE_IS_ALL_LOADED = 'UPDATE_IS_ALL_LOADED';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';
export const UPDATE_IS_EDDITED_QUESTION = 'UPDATE_IS_EDDITED_QUESTION';
export const UPDATE_IS_APPROVED_QUESTION = 'UPDATE_IS_APPROVED_QUESTION';

export const updateQuestionsData = (questionsData, isInitial) => ({
    type: UPDATE_QUESTIONS_DATA,
    questionsData,
    isInitial
});

export const updateIsAllLoaded = (isAllLoaded) => ({
    type: UPDATE_IS_ALL_LOADED,
    isAllLoaded
});

export const updateIsLoading = (isLoading) => ({
    type: UPDATE_IS_LOADING,
    isLoading
});

export const updateIsEdditedQst = (isEddited, qstId) => ({
    type: UPDATE_IS_EDDITED_QUESTION,
    isEddited,
    qstId
});

export const updateIsApprovedQst = (isApproved, qstId) => ({
    type: UPDATE_IS_APPROVED_QUESTION,
    isApproved,
    qstId
});
