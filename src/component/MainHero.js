import React from 'react'
import LowerMain from './LowerMain'
import MainContext from './MainContext'

const MainHero = () => {
    return (
        <>
            <div className='box w-100 d-flex justify-content-start align-items-center flex-column gap-4' style={{height:"89vh"}}>
                <MainContext />
                <LowerMain />
            </div>
        </>
    )
}

export default MainHero