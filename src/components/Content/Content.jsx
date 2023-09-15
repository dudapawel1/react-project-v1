import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { Route, Routes, Navigate } from 'react-router-dom';

import Courses from '../Courses/Courses';
import { StoreContext } from '../../store/StoreProvider';

import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
    const { user } = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user?.accessLevel === ADMIN_TYPE;

    return ( 
        <main className={style()}>
            <Routes>
                <Route path="/" element={<Courses />} /> {/* Render Courses component at the root URL */}
                {isUserLogged && <Route path='/my-courses' element={<p>Moje kursy</p>} />}
                {isAdmin && <Route path='/manage-courses' element={<p>Zarządzanie kursami</p>} />}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
     );
}
export default Content;
