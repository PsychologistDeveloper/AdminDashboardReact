import {
    getInitialSortedPaginatedDocs,
    getNextDocs,
    addOrUpdateDoc
} from "Utils/Query";
import { QUESTION_COLLECTION } from "Utils/Constants/dbPathnames";
import { pushNotification, ERROR_TYPE, SUCCESS_TYPE } from "Store/Notification/Notification.dispatcher";
import { SUCCESS_CONTENT_APPROVE_MESSAGE } from "Utils/Constants/notificationMessages";

import {
    updateQuestionsData,
    updateIsLoading,
    updateIsAllLoaded,
    updateIsEdditedQst,
    updateIsApprovedQst
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
                5,
                'updated_at'
            );
        } else {
            result = await getNextDocs(
                QUESTION_COLLECTION,
                5,
                docs[docs.length - 1],
                'updated_at'
            );
        }

        if (!result.docs.length) {
            dispatch(updateIsAllLoaded(true));
        }

        dispatch(updateQuestionsData(result, isInitial));
        dispatch(updateIsLoading(false));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
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
        dispatch(updateIsLoading(false));
    } catch (e) {
        pushNotification(dispatch, ERROR_TYPE, e);
    }
};
