import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import Course from '../Course/Course';
import { StoreContext } from "../../store/StoreProvider";

import { default as UserCoursesStyles } from './UserCourses.module.scss';

const style = bemCssModules(UserCoursesStyles);

const UserCourses = () => {
    const { user, courses } = useContext(StoreContext);

    const byedCourses = courses
        .filter(course => user.courses.includes(course.id))
        .map((course => <Course key={course.id} {...course}/>));

    return ( 
        <section className={style()}>
            <h2 className={style('title')}>Twoje wykupione kursy</h2>
            <ul className={style('list')}>
                {byedCourses}
            </ul>
        </section>
     );
}
 
export default UserCourses;