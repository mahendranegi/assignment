import { Button, Switch, Tag } from 'antd';
import React from 'react';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

// Single Card Component
const CardItem = ({ title, company, user, date, tag }) => (
    <>
  <aside>
    <div className='infoSec'>
      <div>
        <span>{title.charAt(0)}</span>
        <ul>
          <li>
            <p>{title}</p>
            <small>{company}</small>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="bx bx-user"></i> {user}</li>
          <li><i className="bx bx-alarm"></i> {date}</li>
        </ul>
      </div>
    </div>

    <div className='actionBtns'>
      <Tag>{tag}</Tag>
      <Button type="default">Default Button</Button>
      <Switch defaultChecked onChange={onChange} size="small" />
    </div>
  </aside>
  </>
);

function Cards() {
  const data = [
    {
      title: "Senior Product Manager",
      company: "Recruit CRM",
      user: "William Sample",
      date: "Jul 10, 2023",
      tag: "Tag 1",
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      user: "Alice Johnson",
      date: "Jul 12, 2023",
      tag: "Tag 2",
    },
  
  ];

  return (
    <div className='cardsSection'>
      {data.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Cards;
