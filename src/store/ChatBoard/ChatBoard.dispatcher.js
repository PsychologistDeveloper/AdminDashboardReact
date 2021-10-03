import { updateActivePopupId } from 'Store/Popup/Popup.action';
import {
  pushChatBoard,
  removeChatBoardTab,
  updateChatBoardTab,
} from 'Store/Admin/Admin.action';
import {
  updateQuestions,
  updateIsQuestionsLoading,
  updateFormulation,
  updateIsFormulationLoading,
  deleteQuestion as deleteQuestionAction,
} from 'Store/ChatBoard/ChatBoard.action';
import { ERROR_TYPE, WARNING_TYPE, pushNotification } from 'Store/Notification/Notification.dispatcher';
import {
  WARNING_ON_EMPTY_QUESTION_ADD,
  WARNING_ON_EMPTY_TAB_ADD,
  WARNING_ON_EMPTY_FORMULATION,
} from 'Utils/Constants/notificationMessages';
import {
  addDocWithAutoId,
  addOrUpdateDoc,
  getCollectionDocsByWhere,
  getDocByPath,
  deleteDocByPath,
} from 'Utils/Query';
import {
  QUESTION_COLLECTION,
  QUESTION_FORMULATIONS_COLLECTION,
} from 'Utils/Constants/dbPathnames';

// Chat board tabs
export const addChatBoardTab = async (dispatch, path, data, setLoading) => {
  try {
    const { name } = data;

    if (!name) {
      pushNotification(dispatch, WARNING_TYPE, WARNING_ON_EMPTY_TAB_ADD);
      return;
    }

    setLoading(true);
    const id = await addDocWithAutoId(path, data).then((id) => id);
    setLoading(false);

    dispatch(pushChatBoard({ data, id }));
    dispatch(updateActivePopupId(''));
  } catch (err) {
    alert(err);
  }
};

export const deleteChatBoardTab = async (dispatch, path, tabId) => {
  await deleteDocByPath(path);
  dispatch(removeChatBoardTab(tabId));
};

export const updateChatBoard = async (dispatch, path, tabId, tabData) => {
  await addOrUpdateDoc(path, tabData);
  dispatch(updateChatBoardTab(tabId, tabData));
};

// Chat board questions

export const getQuestionsForTab = async (dispatch, tabId) => {
  dispatch(updateIsQuestionsLoading(true));

  try {
    const questionsForTab = await getCollectionDocsByWhere(QUESTION_COLLECTION, 'tabId', tabId);
    dispatch(updateQuestions(questionsForTab));
  } catch (e) {
    pushNotification(dispatch, ERROR_TYPE, e);
  } finally {
    dispatch(updateIsQuestionsLoading(false));
  }
};

export const addQuestion = async (dispatch, questionData) => {
  const { name } = questionData;

  if (!name) {
    pushNotification(dispatch, WARNING_TYPE, WARNING_ON_EMPTY_QUESTION_ADD);
    return false;
  }

  await addDocWithAutoId(QUESTION_COLLECTION, questionData);
  dispatch(updateQuestions(questionData));
  dispatch(updateActivePopupId(''));
};

export const addQuestionFormulation = async (dispatch, questionId, psychotypeId, formulation) => {
  if (!formulation) {
    pushNotification(dispatch, WARNING_TYPE, WARNING_ON_EMPTY_FORMULATION);
    return false;
  }

  try {
    const path = `${QUESTION_COLLECTION}/${questionId}/${QUESTION_FORMULATIONS_COLLECTION}/${psychotypeId}`;

    dispatch(updateIsFormulationLoading(true));
    await addOrUpdateDoc(path, { formulation });
  } catch (e) {
    pushNotification(dispatch, ERROR_TYPE, e);
  } finally {
    dispatch(updateIsFormulationLoading(false));
  }
};

export const getQuestionFormulation = async (dispatch, questionId, psychotypeId) => {
  try {
    const path = `${QUESTION_COLLECTION}/${questionId}/${QUESTION_FORMULATIONS_COLLECTION}/${psychotypeId}`;
    dispatch(updateIsFormulationLoading(true));
    const { formulation = '' } = await getDocByPath(path) || {};
    dispatch(updateFormulation(formulation));
  } catch (e) {
    pushNotification(dispatch, ERROR_TYPE, e);
  } finally {
    dispatch(updateIsFormulationLoading(false));
  }
};

export const deleteQuestion = async (dispatch, questionId) => {
  const path = `${QUESTION_COLLECTION}/${questionId}`;

  try {
    await deleteDocByPath(path);
    dispatch(deleteQuestionAction(questionId));
  } catch (e) {
    pushNotification(dispatch, ERROR_TYPE, e);
  }
};
