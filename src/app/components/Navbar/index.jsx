import React from 'react';
import Link from 'next/link';

//components
import Logo from '../Logo';
import Menu from '../Menu';

//icon
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import "./index.scss";

const BASE_CLASSNAME = "header"

const Navbar = () => {
  return (
    <header className={BASE_CLASSNAME}>
      <Logo />
      <Menu 
        className={`${BASE_CLASSNAME}_menu_container`}
        hiddenOnSmallerDevices 
      />
      <div className={`${BASE_CLASSNAME}_contact-container`}>
        <Link 
          className="btn-white"
          href="/contact"
        >
          <span className="text">
            Let's Talk
            <CreateRoundedIcon className='pencil' fontSize='sm' />  
          </span>
        </Link>
        <MenuOpenRoundedIcon className='menu_icon'/>
      </div>
    </header>
  )
}

export default Navbar