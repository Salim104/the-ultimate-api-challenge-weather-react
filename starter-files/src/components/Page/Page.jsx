import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForecast from '../../Hooks/useForecast';

const Page = () => {
    const { error, loading, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        submitRequest(value);
    };
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* {form} */}
                {!loading && <Form submitSearch={onSubmit} />}
                {/* {error} */}
                {error && <Error message={error} />}
                {/* {Loading} */}
                {loading && <Loader />}
                {/* {forecast} */}
            </div>
            {forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;
