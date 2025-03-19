import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import ChatPanel from './ChatPanel/ChatPanel';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <>
      <LeftPanel />
      <ChatPanel />
    </>
  );
};

export default MainContent;