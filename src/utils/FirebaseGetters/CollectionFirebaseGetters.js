import { COLLECTION } from 'Hoc/Firebase/WithUseDBData';

export const getChatBoardsConfig = () => ({
  type: COLLECTION,
  path: 'chat-board-tabs',
  nameInProps: 'chatBoards',
});
