import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageTag from '../../ImageTag/Index';

const SubMenu = ({ submenus }) => {
  const [hoverIndex, setHoverIndex] = useState(null); // Changed to null to handle the default case

  return (
    <div className="dropdown-content">
      <div className="submenu">
        <div className="submenu_Child">
          {submenus.map((submenu, index) => (
            <div
              className="submenu_row col-12 float-start"
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="submenucontent subMenucontent">
                {submenu.link ? (
                  <Link to={submenu.link}>
                    <p>{submenu.text}</p>
                  </Link>
                ) : (
                  <p>{submenu.text}</p>
                )}
              </div>
              <div
                className="submenuicons subMenucontIcon"
                style={{
                  display: index === 0 || hoverIndex === index ? 'block' : 'none'
                }}
              >
                <ImageTag ImagePath={submenu.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
