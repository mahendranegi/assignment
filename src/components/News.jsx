import React from 'react'
import InfoTabs from './InfoTabs'
import NewsCards from './NewsCards'

function News() {
  const tabItems = [
    {
      key: '1',
      label: 'All',
      children:  <NewsCards />,
    },
    {
      key: '2',
      label: 'Notes & Calls',
      children: <NewsCards />,
    },
    {
      key: '3',
      label: 'Tasks',
      children: "News Section",
    },
   {
      key: '4',
      label: 'Meeting',
      children: "News Section",
    },
   
   
  ];
  return (
    <div>
        <div className='Newsheader'>
            <span><i class='bx  bxs-note'  ></i> </span> 
            <span><i class='bx  bxs-phone'  ></i>  </span>
            <span><i class='bx  bxs-check-circle'  ></i> </span>
            <span><i class='bx  bxs-calendar-alt'  ></i>  </span>
        </div>
        <InfoTabs  items={tabItems} defaultKey="1"/>
        
    </div>
  )
}

export default News