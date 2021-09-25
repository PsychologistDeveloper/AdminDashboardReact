import { updateActivePopupId } from 'Store/Popup/Popup.action';
import { db } from 'Utils/Firebase';

import { pushChatBoard, removeChatBoardTab, updateChatBoardTab } from 'Store/Admin/Admin.action';

import { addDocWithAutoId, addOrUpdateDoc } from 'Utils/Query';

export const addChatBoardTab = async (dispatch, path, data) => {
  try {
    const id = await addDocWithAutoId(path, data).then((id) => id);

    dispatch(pushChatBoard({ data, id }));
    dispatch(updateActivePopupId(''));
  } catch (err) {
    console.error(err);
  }
};

export const deleteChatBoardTab = async (dispatch, path, tabId) => {
  await db
    .doc(path)
    .get()
    .then((doc) => doc.ref.delete());

  dispatch(removeChatBoardTab(tabId));
};

export const updateChatBoard = async (dispatch, path, tabId, tabData) => {
  await addOrUpdateDoc(path, tabData);
  dispatch(updateChatBoardTab(tabId, tabData));
};
