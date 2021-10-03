export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const UPDATE_IS_QUESTIONS_LOADING = 'UPDATE_IS_QUESTIONS_LOADING';
export const UPDATE_IS_FORMULATION_LOADING = 'UPDATE_IS_FORMULATION_LOADING';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_FORMULATION = 'UPDATE_FORMULATION';

export const setActiveNavigationTab = (tabId) => ({
  type: SET_ACTIVE_TAB,
  tabId,
});

export const updateQuestions = (questions) => ({
  type: UPDATE_QUESTIONS,
  questions,
});

export const deleteQuestion = (questionId) => ({
  type: DELETE_QUESTION,
  questionId,
});

export const updateIsQuestionsLoading = (isQuestionsLoading) => ({
  type: UPDATE_IS_QUESTIONS_LOADING,
  isQuestionsLoading,
});

export const updateIsFormulationLoading = (isFormulationLoading) => ({
  type: UPDATE_IS_FORMULATION_LOADING,
  isFormulationLoading,
});

export const updateFormulation = (formulation) => ({
  type: UPDATE_FORMULATION,
  formulation,
});
