import { useState, useCallback } from 'react';
import { mockForRadio } from './index.config';

import { checkmarkIcon } from '../../assets';

import styles from './index.module.sass';

const RadioSelect = ({ options }) => {
  const [value, setValue] = useState(mockForRadio[0].value);

  const handleClick = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <div className={styles.radioContainer}>
      {mockForRadio.map((item) => (
        <label
          className={styles.label}
          key={item.value}
          onClick={() => handleClick(item.value)}
        >
          <div className={styles.pseudo}>
            <img
              className={value === item.value ? styles.visible : ''}
              src={checkmarkIcon}
              alt=""
            />
          </div>
          <input
            className={styles.radio}
            value={item.value}
            type="radio"
            checked={value === item.value ?? false}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioSelect;
