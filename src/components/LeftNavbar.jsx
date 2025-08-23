import React from 'react'
import "../assets/styles.scss";

function LeftNavbar() {
  return (
    <div className='leftPannel'>
        <a><span><i class='bx  bx-list-ul'  ></i></span>   </a>
       
          <a><span className='active'><i class='bx  bx-user'  ></i> </span> </a>
           <a><span><i class='bx  bx-building'  ></i>  </span></a>
           <a><span><i class='bx  bx-envelope'  ></i></span> </a>
           <a href=""><span><i class='bx  bx-dollar-circle'  ></i> </span></a>
             <a><span><i class='bx  bx-credit-card-alt'  ></i> </span> </a>
              <a><span><i class='bx  bx-cog'  ></i> </span> </a>
               <a><span><i class='bx  bx-dots-horizontal-rounded'  ></i> </span> </a>
       
    </div>
  )
}

export default LeftNavbar