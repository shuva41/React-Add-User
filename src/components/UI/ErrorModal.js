import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>;
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />)};
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />
      )}
      ;
    </>
  );
};

export default ErrorModal;
