import React from 'react'
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import logoImg from "../assets/images/logo.svg"; // relative pathavtarImg
import avtarImg from "../assets/images/Avatar.jpg";
import { Button,Input, DatePicker,Tooltip } from "antd";
import "../assets/styles.scss";

function Header() {
  return (
    <div className='HeaderBar'>
        <aside>
       <Input
      placeholder="Enter your username"
      prefix={<i class='bx  bx-search'  ></i> }
    />
      <img src={logoImg} alt='Images' />
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