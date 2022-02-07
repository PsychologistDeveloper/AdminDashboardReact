import {
    getInitialSortedPaginatedDocs,
    getNextDocs,
    addOrUpdateDoc
} from "Utils/Query";
import { QUESTION_COLLECTION } from "Utils/Constants/dbPathnames";
import { SUCCESS_CONTENT_APPROVE_MESSAGE } from "Utils/Constants/notificationMessages";
import { translatorItemsInPortion } from "Utils/Constants/paginationPortions";

import { pushNotification, ERROR_TYPE, SUCCESS_TYPE } from "Store/Notification/Notification.dispatcher";
import { updateActivePopupId } from 'Store/Popup/Popup.action';

import {
    updateQuestionsData,
    updateIsLoading,
    updateIsAllLoaded,
    updateIsEdditedQst,
    updateIsApprovedQst,
    updateQuestionByID
} from "./Translations.action";

export const getPortionForTranslation = async (
    dispatch,
    docs,
    isInitial
) => {
    try {
        let result;

        dispatch(updateIsLoading(true));

        if (isInitial) {
            result = await getInitialSortedPaginatedDocs(
                QUESTION_COLLECTION,
                translatorItemsInPortion,
                'created_at'
            );
        } else {
            result = await getNextDocs(
                QUESTION_COLLECTION,
                translatorItemsInPortion,
                docs[docs.length - 1],
                'created_at'
            );
        }

        if (!result.docs.length) {
            dispatch(updateIsAllLoaded(true));
        }

        dispatch(updateQuestionsData(result, isInitial));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsLoading(false));
    }
};

export const updateIsApproved = async (dispatch, isApproved, qstId) => {
    const path = `${QUESTION_COLLECTION}/${qstId}`;

    try {
        dispatch(updateIsLoading(true));

        await addOrUpdateDoc(path, { isApproved });

        if (isApproved) {
            pushNotification(dispatch, SUCCESS_TYPE, SUCCESS_CONTENT_APPROVE_MESSAGE);
        }

        dispatch(updateIsApprovedQst(isApproved, qstId));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsLoading(false));
    }
};

export const updateTranslations= async (dispatch, qstTranslations, qstId) => {
    const path = `${QUESTION_COLLECTION}/${qstId}`;

    const dataToSet = {
        ...qstTranslations,
        isEddited: true
    };

    try {

        dispatch(updateIsLoading(true));
        await addOrUpdateDoc(path, dataToSet);

        dispatch(updateQuestionByID(dataToSet, qstId));
        dispatch(updateIsEdditedQst(true, qstId));
        dispatch(updateActivePopupId(''));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    } finally {
        dispatch(updateIsLoading(false));
    }
};
