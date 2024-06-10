import React from "react";
import './index.scss';
const [visible, setVisible] = useState(false);
 
  const toggleMenu = () => {
    setVisible(visible); 
  };

const ResponsiveNav = () => {
  return (
    <>
      <div className='portal-wrapper'>
          {createPortal(
            <div
              className='portal'
            >
              <p>Content in the portal</p>
              <button onClick={toggleMenu}>Click Me</button>
            </div>,
            document.getElementById("portal")
          )}
        </div>
    </>
  );
};

export default ResponsiveNav;
