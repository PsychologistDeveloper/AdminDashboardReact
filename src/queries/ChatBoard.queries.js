import { db } from 'Utils/Firebase';

export const queryChatBoardTabs = async () => {
  try {
    await db.collection('chat-board-tabs').onSnapshot(() => {
    // const result = await db.collection('chat-board-tabs').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.tab_id));
    });
  } catch (err) {
    alert(err.message);
  }
};
