import React, { useContext } from 'react';
import "../App.css"
import { PowerHouse } from '../context/ContextAPI';

const MainContext = () => {
    const { answer } = useContext(PowerHouse);

    return (
        
        <div className='maincontent2 d-flex justify-content-center align-items-center flex-wrap gap-2 overflow-auto ' style={{ scrollbarWidth: 'none', height: '80%'}}>


            {answer ?
                <div dangerouslySetInnerHTML={{ __html: answer }} />
                : (
                    <>
                        <div className="card" style={{ height: '13rem', width: '10rem' }}>
                            <div className="card-body">
                                <p className="card-title">Card title</p>
                                <p className="card-text" style={{ fontSize: '0.7rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card" style={{ height: '13rem', width: '10rem' }}>
                            <div className="card-body">
                                <p className="card-title">Card title</p>
                                <p className="card-text" style={{ fontSize: '0.7rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card" style={{ height: '13rem', width: '10rem' }}>
                            <div className="card-body">
                                <p className="card-title">Card title</p>
                                <p className="card-text" style={{ fontSize: '0.7rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card" style={{ height: '13rem', width: '10rem' }}>
                            <div className="card-body">
                                <p className="card-title">Card title</p>
                                <p className="card-text" style={{ fontSize: '0.7rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}

export default MainContext;
