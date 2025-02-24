import React, { useState } from 'react'

const Sidebar = () => {

  const [menu, setMenu] = useState(false)

  const Menubar = () => {
    return setMenu((prev) => !prev)
  }

  return (
    <div className='d-flex justify-content-around align-items-center flex-column vh-75' style={{ width: menu ? '15%' : "5%" , backgroundColor:'#f0f9ff',transition: 'width 0.5s ease-in-out',}}>
      <div className="menu d-flex justify-content-center align-items-end " style={{ height: '50px'}}>
        <i className="fa-solid fa-bars m-1" onClick={Menubar} style={{cursor: 'pointer' }}></i>
        {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Menu</p> : null}
      </div>

      <div className="add d-flex justify-content-center align-items-center flex-column gap-2 rounded " style={{backgroundColor:'#c4eaf9', height: '60%', width: '80%', scrollbarWidth: 'none' }}>
        <div className="add-data d-flex justify-content-between align-items-center flex-column gap-1 h-100 w-100" >
          <div className={`${menu?'rounded':'rounded-circle'} add-heading d-flex justify-content-center align-items-center mt-1 rounded`} style={{backgroundColor:'#C6E2FF', width:  menu ? '50px' :'20px' ,height:'20px',boxShadow: menu ? '5px 3px 10px rgba(0, 0, 0, 0.3)' : '5px 3px 10px rgba(0, 0, 0, 0.2)'}}>
            <i className="fa-solid fa-plus"></i>
            {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Add</p> : null}
          </div>
          <div className="data d-flex justify-content-center align-items-center overflow-auto flex-column h-100 gap-2" style={{ width: '100%', scrollbarWidth: 'none' }}>
          
          </div>
        </div>

      </div>

      <div className="last-icons d-flex justify-content-center align-items-start flex-column gap-2" style={{ height: '100px', width: menu ? '80px' : '20px' }}>
        <div className="question d-flex justify-content-center align-items-center gap-1">
          <i className="fa-solid fa-circle-question"></i>
          {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Question</p> : null}
        </div>
        <div className="history d-flex justify-content-center align-items-center gap-1">
          <i className="fa-solid fa-clock-rotate-left"></i>
          {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>History</p> : null}
        </div>
        <div className="setting d-flex justify-content-center align-items-center gap-1">
          <i className="fa-solid fa-gear"></i>
          {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
