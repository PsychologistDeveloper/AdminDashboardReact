import {
  // DOC,
  DOC_BY_ID,
} from 'Hoc/Firebase/WithUseDBData';

export const getAdminConfig = () => ({
  type: DOC_BY_ID,
  path: 'admins',
  nameInProps: 'admin',
  fieldName: 'uid',
  dispatchCbName: 'someDispatch',
  reduxDependencyName: 'admin',
});

export const getChatBoardTabPath = () => ['chat-board-tabs/someChatboard', 'chatBoard'];
