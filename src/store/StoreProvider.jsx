import React from 'react';

import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({children}) => {
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState(null);

    const fetchData = async () => {
        const { data } = await request.get('/courses');

        setCourses(data.courses);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const contextValues = { courses, setCourses, user, setUser };

    return (
        <StoreContext.Provider value={contextValues}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;