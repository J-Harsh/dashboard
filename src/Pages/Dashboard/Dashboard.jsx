import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Workplace from './Workplace/Workplace'


const Dashboard = () => {




  return (
    <div style={{ display: "flex", backgroundColor: "#F5F5F5", height: "100%" }}>

      <Sidebar />
      <Workplace />

    </div>
  )
}

export default Dashboard