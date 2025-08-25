import React, { useState } from 'react'
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import logoImg from "../assets/images/logo.svg"; // relative pathavtarImg
import avtarImg from "../assets/images/Avatar.jpg";
import { Button,Input, DatePicker,Tooltip, Drawer } from "antd";

import { MenuOutlined } from "@ant-design/icons";
function Header() {
   const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);
  return (
    <div className='HeaderBar'>
       
       <Drawer
        placement="left"
        onClose={onClose}
        className='menuDrawer'
        open={open}
        bodyStyle={{ padding: "16px" }}
      >
        <nav className="flex flex-col gap-4 text-lg">
          <a><i className="bx bx-list-ul"></i> List</a>
          <a className="active"><i className="bx bx-user"></i> User</a>
          <a><i className="bx bx-building"></i> Company</a>
          <a><i className="bx bx-envelope"></i> Messages</a>
          <a><i className="bx bx-dollar-circle"></i> Payments</a>
          <a><i className="bx bx-credit-card-alt"></i> Cards</a>
          <a><i className="bx bx-cog"></i> Settings</a>
          <a><i className="bx bx-dots-horizontal-rounded"></i> More</a>
        </nav>
      </Drawer>
        <aside>
       <Input
      placeholder="Enter your username"
      prefix={<i class='bx  bx-search'  ></i> }
    />
    <div>
      <img src={logoImg} alt='Images' />
    <Button
        className="mobileIcon"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
    </div>

    </aside>
    <div>
       
    <div>
<span className='active'><i class='bx  bx-plus'  ></i> </span>      
  <em></em>
       <span> <i class='bx  bx-bell'  ></i> </span>
       <span> <i class='bx  bx-envelope'  ></i> </span>
        <span><i class='bx  bx-bell'  ></i> </span>
        <div className='profile'>
           <img src={avtarImg} alt='Images' />
            <div>Phyllis Yang <p>Silicon Links Inc</p></div>
        </div>
    </div>
    </div>
   
    </div>
  )
}

export default Header