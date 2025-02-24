import React, { useContext } from 'react';
import "../App.css"
import { PowerHouse } from '../context/ContextAPI';

const Sidebar = () => {
  const { menu, Menubar, previous, loadPrompt,ReloadData } = useContext(PowerHouse);


  return (
    <div className={`sidebar-menubtn d-flex justify-content-center align-items-center flex-column vh-75 gap-3 ${menu ? 'menu-open' : 'menu-closed'}`} style={{backgroundColor: '#f0f9ff', transition: 'width 0.5s ease-in-out'}}>
      <div className="menu d-flex align-items-center" style={{ height: '40px' }}>
        <i className="fa-solid fa-bars m-1" onClick={Menubar} style={{ cursor: 'pointer' }}></i>
        {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Menu</p> : null}
      </div>

      <div className="add d-flex justify-content-center align-items-center flex-column gap-2 rounded" style={{ backgroundColor: '#c4eaf9', height: '70%', width: '80%', scrollbarWidth: 'none' }}>
        <div className="add-data d-flex justify-content-between align-items-center flex-column gap-1 h-100 w-100">
          <div className={`${menu ? 'rounded' : 'rounded-circle'} add-heading d-flex justify-content-center mt-3 align-items-center mt-1 rounded`} onClick={ReloadData} style={{ backgroundColor: '#C6E2FF', width: menu ? '50px' : '20px', height: '20px', boxShadow: menu ? '5px 3px 10px rgba(0, 0, 0, 0.3)' : '5px 3px 10px rgba(0, 0, 0, 0.2)' }}>
            <i className="fa-solid fa-plus"></i>
            {menu ? <p className='d-flex justify-content-center align-items-center mb-0'>Add</p> : null}
          </div>
          <div className="data d-flex justify-content-start align-items-center flex-column mt-2 gap-2" style={{ height:'100%', width: '100%', overflow:'auto',scrollbarWidth:'none'}}>
            {previous.map((item, index) => {
              return (
                <div key={index} className='gap-1 d-flex  align-items-center' onClick={() => loadPrompt(item.value || item)} style={{ height: '40px', width: '90%', backgroundColor: menu ? '#acd0f1' : 'transparent', cursor: 'pointer', justifyContent: menu ? 'start' : 'center', boxShadow: menu ? '0px 2px 5px rgba(0, 0, 0, 0.3)' : '0px 3px 5px rgba(0, 0, 0, 0)' }}>
                  <i className="fa-solid fa-desktop  d-flex justify-content-center align-items-center" style={{height:'40px', width: '30px'}}></i>
                  {menu ? <p className='mb-0 w-75 '>{item.slice(0, 15)}...</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="last-icons d-flex justify-content-center align-items-start flex-column gap-2" style={{ height: '100px', width: menu ? '' : '20px' }}>
        <div className="question d-flex justify-content-center align-items-center gap-1" >
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
  );
};

export default Sidebar;
