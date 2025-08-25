import React, { useState } from "react";
import { Button, Flex, Drawer,Form, Input } from "antd";
import socialIcons from "../assets/images/social-icons.png";
import InfoTabs from "./InfoTabs";
import Cards from "./Cards";
import { useCandidate } from "../store/candidateStore";  // Import Store Hook

function InformationUser() {
  const [open, setOpen] = useState(false);
   const { userDetails, setUserDetails } = useCandidate(); // use store

  const onClose = () => {
    setOpen(false);
  };
  const tabItems = [
    {
      key: "1",
      label: "All Details",
      children: <p>This is a details section</p>,
    },
    {
      key: "2",
      label: "Assigned Jobs",
      children: (
        <div>
          
          <div className="flexDisplay">
            
            <h4>Assigned Job to William Sample</h4>
            <div>
              
              <Button type="primary">Assign To Job</Button>
              <Button>View All Assigned Jobs</Button>
            </div>
          </div>
          <Cards />
        </div>
      ),
    },
    { key: "3", label: "Team Table", children: "hello" },
    { key: "4", label: "Footer", children: "hii" },
  ];

const [form] = Form.useForm();
 const showDrawer = () => {
    form.setFieldsValue(userDetails); 
    setOpen(true);
  };
const onFinish = (values) => {
    setUserDetails(values); 
    setOpen(false); // close drawer after save
  };
  return (
    <div className="infoUser">
      
      <div className="contactInfoSec">
        
        <div className="contactList">
          
          <span>
            
            <i class="bx bxs-user"></i>
          </span>
          <div>
            
            <>
              
              <h4>
                
                William Sample <img
                  src={socialIcons}
                  alt="social-icons "
                />
              </h4>
              <p>
                
                <span>Senior Product Manager</span> <span>United States</span>
                <span>Dallas</span>
              </p>
            </>
          </div>
        </div>
        <div>
          
          <Button danger>Contact Linked</Button>
          <span>
            
            <i class="bx bxs-star"></i>
          </span>
          <span>
            
            <i class="bx bxs-hot"></i>
          </span>
          <span onClick={showDrawer}>
            
            <i class="bx bxs-edit"></i>
          </span>
          <span>
            
            <i class="bx bx-dots-vertical-rounded"></i>
          </span>
        </div>
      </div>
      <div className="mainDiv">
        
        <div className="flexDevider emailInfo">
          
          <div>
            
            <a>
              
              <i class="bx bx-envelope"></i>williamsample@gmail.com
            </a>
            <a>
              
              <i class="bx bxs-phone"></i> 94954586586
            </a>
          </div>
          <div>
            
            <strong>
              
              <i class="bx bx-user"></i> Phyllis Yang
            </strong>
            <strong>
              
              <i class="bx bx-alarm"></i> Jul 14, 2023, 4:04 pm
            </strong>
          </div>
        </div>
        <div className="scrollOnly">
          
          <div className="listData">
            
            <ul class="candidate-details">
              
              <li>
                
                <strong>Current Organization</strong>
                <span>{userDetails.designation}</span>
              </li>
              <li>
                
                <strong>Skills</strong> <span>{userDetails.skills}</span>
              </li>
               <li>
                
                <strong>country</strong> <span>{userDetails.country}</span>
              </li>
              <li>
                
                <strong>Available From</strong> <span>{userDetails.availableFrom}</span>
              </li>
              <li>
                
                <strong>Current Salary</strong> <span>{userDetails.salary}</span>
              </li>
              <li>
                
                <strong>Notice Period</strong> <span>{userDetails.noticePeriod}</span>
              </li>
              <li>
                
                <strong>Full Address</strong>
                <span>{userDetails.address}</span>
              </li>
              <li>
                
                <strong>Resume</strong> <span>{userDetails.resume}</span>
              </li>
              <li>
                
                <strong>Total Experience</strong> <span>{userDetails.experience}</span>
              </li>
            </ul>
          </div>
          <InfoTabs items={tabItems} defaultKey="2" />
        </div>
      </div>
      <Drawer
        title="User Details Information"
        className="userDetailsModal"
        // closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        width={480}
        open={open}
        footer={<div style={{display:'flex',justifyContent:'end',gap:'16px'}} onClick={onClose}> <Button>Cancel</Button>
            <Button type="primary"   htmlType="submit" form="userDetailsForm">Save</Button></div>}
      >
        
         <Form
      form={form}
      layout="vertical"
      name="userDetailsForm"
      onFinish={onFinish}
       initialValues={userDetails}
    >
     
      <Form.Item name="designation" label="Current Organization">
        {console.log(userDetails,'Hello...')}
        <Input/>
      </Form.Item>
      <Form.Item name="country" label="country">
        <Input />
      </Form.Item>
      <Form.Item name="city" label="city">
        <Input />
      </Form.Item>
       <Form.Item name="email" label="email">
        <Input />
      </Form.Item>
       <Form.Item name="phone" label="phone">
        <Input />
      </Form.Item>
       <Form.Item name="organization" label="organization">
        <Input />
      </Form.Item>
       <Form.Item name="skills" label="skills">
        <Input />
      </Form.Item>
       <Form.Item name="availableFrom" label="available From">
        <Input />
      </Form.Item>
       <Form.Item name="salary" label="salary">
        <Input />
      </Form.Item>
       <Form.Item name="noticePeriod" label="notice Period">
        <Input />
      </Form.Item>

       <Form.Item name="address" label="address">
        <Input />
      </Form.Item>
       <Form.Item name="resume" label="resume">
        <Input />
      </Form.Item>
       <Form.Item name="experience" label="experience">
        <Input />
      </Form.Item>
      
    </Form>
      </Drawer>
    </div>
  );
}
export default InformationUser;
