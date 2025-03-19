import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <MainContent />
      </main>
    </div>
  );
};

export default Layout;