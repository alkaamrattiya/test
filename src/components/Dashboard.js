import React, { useState } from 'react'
import Table1 from './Table1'
import {Manuapi,Manuapi2} from './Manuapifile.js'
import Table2 from './Table2.js'


const Dashboard = () => {

  const[menu,setMenu ]=useState(Manuapi)
  const[menu2,setMenu2 ]=useState(Manuapi2)
  return (
    <div className='table'>
  <Table1 className="t1" menu={menu} setMenu={setMenu}/>
    <Table2 className="t2" menu2={menu2} setMenu2={setMenu2} />
    </div>
  )
}

export default Dashboard