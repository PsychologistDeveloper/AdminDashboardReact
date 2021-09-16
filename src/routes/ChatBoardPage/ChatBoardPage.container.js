import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'Utils/Firebase';
import ChatBoardPage from './ChatBoardPage.component';

export const ChatBoardPageContainer = () => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return false;
    }

    if (!user) window.location.pathname = '/auth';
  }, [user, loading]);

  return (
    <ChatBoardPage />
  );
};

export default ChatBoardPageContainer;
