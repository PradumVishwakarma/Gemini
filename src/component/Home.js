import React from 'react';
// import { PowerHouse } from '../context/ContextAPI';
import Sidebar from './Sidebar';
import Main from './Main';

const Home = () => {
    // const name = useContext(PowerHouse)
    return (
        <>
            {/* <div className='d-flex justify-content-center align-items-center w-100 '>
                <h3>Hello, World! My Name is {name}</h3>
            </div> */}
            <div className="d-flex w-100 vh-100">
            <Sidebar/>
            <Main/>
            </div>
        </>
    );
};

export default Home;
