import React from 'react';
import styles from './ChatPanel.module.css';

const ChatPanel: React.FC = () => {
  return (
    <div className={styles.chatPanel}>
      <div className={styles.header}>
        <h2>Agente Minero</h2>
      </div>
      <div className={styles.messagesContainer}>
        <div className={styles.message + ' ' + styles.botMessage}>
          <p>Hola, soy tu asistente minero. ¿En qué puedo ayudarte hoy?</p>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          placeholder="Escribe tu mensaje aquí..."
          className={styles.input}
        />
        <button className={styles.sendButton}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatPanel;