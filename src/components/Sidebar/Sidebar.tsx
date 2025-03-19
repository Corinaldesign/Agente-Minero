import React from "react";
import { Home, MessageSquare, Calendar, Settings } from "lucide-react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.menuItem}>
        <Home size={24} />
      </div>
      <div className={styles.menuItem}>
        <MessageSquare size={24} />
      </div>
      <div className={styles.menuItem}>
        <Calendar size={24} />
      </div>
      <div className={styles.menuItem}>
        <Settings size={24} />
      </div>
    </nav>
  );
};

export default Sidebar;
