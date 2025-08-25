import { Breadcrumb } from 'antd'
import React from 'react'
import { HomeOutlined, AppstoreOutlined, UnorderedListOutlined, FileTextOutlined } from '@ant-design/icons'

function Breadcrumbs() {
  return (
    <div className='BreadCrumbSec'>
    <Breadcrumb
      separator={<i class='bx  bx-chevron-right'  ></i>}  // custom separator
      items={[
        {
          title: <a href="/candidates" className='active'>Candidates</a>,
        },
        {
          title: <a href="/candidates/roberthardy">Robert Hardy</a>,
        },
        {
          title: <a>ID - 231</a>,
        },
      ]}
    />
    <div>
      <button>Request Profile Update</button>
       <button>Previous</button>
        <button>Next</button>
    </div>
    </div>
  )
}

export default Breadcrumbs