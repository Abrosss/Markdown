import React from 'react'
import DeleteIcon from '../assets/icon-delete.svg'
import SaveIcon from '../assets/icon-save.svg'
import MenuIcon from '../assets/icon-menu.svg'
import Logo from '../assets/logo.svg'
import Document from '../assets/icon-document.svg'
function Header() {
  return (
    <header>
      <section>
        <div className='icon clickable'>
          <img src={MenuIcon} alt='menu icon'></img>
        </div>
        <section>
          <div className='icon clickable logo-border'>
          <img src={Logo} alt='logo'></img>
          </div>
     
          <div className='flex center'>
            <div className='icon'>
          <img src={Document} alt='document icon'></img>
          </div>
            <div className='column'>
              <span className='dark-grey'>Document Name</span>
              <span contentEditable="true" className='white'>welcome.md</span>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className='icon clickable'> 
        <img src={DeleteIcon} alt='delete icon '></img>
        </div>
        
        <button className='clickable'>
          <img src={SaveIcon} alt='save icon '></img>
          <span>Save Changes</span>
        </button>
      </section>
    </header>
  )
}

export default Header