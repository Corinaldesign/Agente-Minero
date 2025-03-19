import React from 'react';
import styles from './LeftPanel.module.css';

const LeftPanel: React.FC = () => {
  return (
    <div className={styles.leftPanel}>
      <h2>Panel de Datos Mineros</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Producción</h3>
          <p>12,500 ton</p>
        </div>
        <div className={styles.statCard}>
          <h3>Eficiencia</h3>
          <p>87%</p>
        </div>
        <div className={styles.statCard}>
          <h3>Seguridad</h3>
          <p>98/100</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;