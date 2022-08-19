import React from 'react'
import { Routes as Switch, Route  } from 'react-router-dom';
import { Calculator, PageNotFound } from './pages';

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route index element={<Calculator />} />
                <Route element={<PageNotFound /> } path="*"/>
            </Switch>
        </>
    )}

    export default Routes