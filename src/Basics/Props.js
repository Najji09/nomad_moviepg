import React from 'react';
import PropTypes from 'prop-types';
import styles from './props.module.css';

const Btn = ({ text, onClick, fontSize = 20, thic, className }) => {
  console.log(text);
  return (
    <button
      className={className}
      style={{
        backgroundColor: 'pink',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        boxShadow: 'inset 0px -2px 5px #999 ',
        fontSize: fontSize,
        fontWeight: thic ? 'bold' : 'normal',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const MemorizedBtn = React.memo(Btn);

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

const Props = () => {
  const [value, setValue] = React.useState('Save Changes');
  const changeValue = () => {
    value === 'Save Changes'
      ? setValue('Revert Changes')
      : setValue('Save Changes');
  };
  return (
    <div>
      <Btn text={value} fontSize={16} onClick={changeValue} thic={true} />
      <Btn text={value} className={styles.btn} />
      <MemorizedBtn text={'Continue'} />
      {/* <ConfirmBtn /> */}
    </div>
  );
};

export default Props;
