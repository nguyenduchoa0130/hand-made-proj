import React from 'react';
import styles from './styles.module.scss';
import { ClockLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { selectors } from '../../../stores';

const LoadingSpinner = () => {
  const isLoading = useSelector(selectors.selectIsLoading);
  return (
    <>
      {isLoading && (
        <div className={styles.spinner}>
          <ClockLoader color='#36d7b7' loading={true} size='80' />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
