import React from 'react';

//components
import Logo from '../Logo';
import Menu from '../Menu';
import CTA from '../CTA';

//icon
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import "./index.scss";

const BASE_CLASSNAME = "header"

const Navbar = () => {
  return (
    <div className={BASE_CLASSNAME}>
      <Logo />
      <Menu 
        className={`${BASE_CLASSNAME}_menu_container`}
        hiddenOnSmallerDevices 
      />
      <div className={`${BASE_CLASSNAME}_contact-container`}>
        <CTA
          linkText="Let's Talk"
          linkHref='/contact'
          linkClass='contact_btn'
          icon={CreateRoundedIcon}
          iconProps={{
            fontSize: 'sm'
          }}  
        />
        <MenuOpenRoundedIcon className='menu_icon'/>
      </div>
    </div>
  )
}

export default Navbar