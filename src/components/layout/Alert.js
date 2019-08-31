import React, { useContext } from 'react';
import { AlertContext } from './../../context';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
