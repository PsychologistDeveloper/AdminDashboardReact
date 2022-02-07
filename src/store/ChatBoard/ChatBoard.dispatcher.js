import { updateActivePopupId } from 'Store/Popup/Popup.action';

import {
    updateQuestions,
    updateIsQuestionsLoading,
    onAdminSaveQuestion,
    addNewQuestion,
    updateIsAllChatboardLoaded,
    deleteQuestion as deleteQuestionAction,
} from 'Store/ChatBoard/ChatBoard.action';
import {
    ERROR_TYPE,
    WARNING_TYPE,
    pushNotification
} from 'Store/Notification/Notification.dispatcher';
import {
    WARNING_ON_EMPTY_QUESTION_ADD,
} from 'Utils/Constants/notificationMessages';
import {
    addDocWithAutoId,
    addOrUpdateDoc,
    deleteDocByPath,
    getInitialSortedPaginatedDocsByWhere,
    getNextDocsByWhere,
    getDocByPath
} from 'Utils/Query';
import {
    QUESTION_COLLECTION,
} from 'Utils/Constants/dbPathnames';
import { chatBoardItemsInPortion } from 'Utils/Constants/paginationPortions';


export const getQuestionsForAdmin = async (dispatch, adminId, docs, isInitial) => {
    dispatch(updateIsQuestionsLoading(true));

    try {
        let result;

        if (isInitial) {
            result = await getInitialSortedPaginatedDocsByWhere(
                QUESTION_COLLECTION,
                chatBoardItemsInPortion,
                'created_at',
                'adminId',
                adminId
            );
        } else {
            result = await getNextDocsByWhere(
                QUESTION_COLLECTION,
                chatBoardItemsInPortion,
                docs[docs.length - 1],
                'created_at',
                'adminId',
                adminId
            );
        }

        if (!result.docs.length) {
            dispatch(updateIsAllChatboardLoaded(true));
        }

        dispatch(updateQuestions(result));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsQuestionsLoading(false));
    }
};

export const addQuestion = async (dispatch, data) => {
    const { answerInput, questionInput } = data;

    if (!answerInput || !questionInput) {
        pushNotification(dispatch, WARNING_TYPE, WARNING_ON_EMPTY_QUESTION_ADD);
        return false;
    }

    const id = await addDocWithAutoId(QUESTION_COLLECTION, data);

    const path = `${ QUESTION_COLLECTION }/${ id }`;
    const qst = await getDocByPath(path);

    const questionData = {
        data: qst,
        id,
    };

    dispatch(addNewQuestion(questionData));
    dispatch(updateActivePopupId(''));
    return true;
};

export const deleteQuestion = async (dispatch, questionId) => {
    const path = `${QUESTION_COLLECTION}/${questionId}`;

    try {
        dispatch(updateIsQuestionsLoading(true));
        await deleteDocByPath(path);
        dispatch(deleteQuestionAction(questionId));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsQuestionsLoading(false));
    }
};

export const saveEditQst = async (dispatch, questionId, data) => {
    const path = `${QUESTION_COLLECTION}/${questionId}`;

    try {
        dispatch(updateIsQuestionsLoading(true));

        await addOrUpdateDoc(path, data);
        dispatch(onAdminSaveQuestion(questionId, data));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsQuestionsLoading(false));
    }
};
