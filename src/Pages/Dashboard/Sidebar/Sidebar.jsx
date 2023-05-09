import React, { useState } from 'react'
import "./sidebar.scss"

import { Slant as Hamburger } from 'hamburger-react'
import { AiOutlinePieChart } from "react-icons/ai"
import { BsTags } from "react-icons/bs"
import { TbCalendarTime } from "react-icons/tb"
import { BiUserCircle } from "react-icons/bi"
import { IoSettingsOutline } from "react-icons/io5"

const Sidebar = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='sideBar' >
            <div className={`sideBarcontainer ${active ? 'active' : ''} `} >

                <i className='hamburger' >
                    <Hamburger toggled={active} toggle={setActive} size={20} duration={0.8} color="#FFFFFF" rounded /></i>

                <div className='section'>
                    {active ? <h1 className='mont' style={{ fontSize: "36px", lineHeight: "43.88px" }} >Board.</h1> : <h1 className='mont' style={{ fontSize: "36px", lineHeight: "43.88px" }}>B.</h1>}

                    <div className='wrapperItems'>
                        <div className='itemsContainer'>

                            <div className='itemContainer'>
                                <i><AiOutlinePieChart /></i>
                                <h3 className={`mont ${active ?'itemTitle': ''}`}>Dashboard</h3>
                            </div>
                            <div className='itemContainer'>
                                <i><BsTags /></i>
                                <h3 className={`mont ${active ?'itemTitle': ''}`}>Transactions</h3>
                            </div>
                            <div className='itemContainer selected'>
                                <i><TbCalendarTime /></i>
                                <h3 className={`mont ${active ?'itemTitle': ''}`}>Schedules</h3>
                            </div>
                            <div className='itemContainer'>
                                <i><BiUserCircle /></i>
                                <h3 className={`mont ${active ?'itemTitle': ''}`}>Users</h3>
                            </div>
                            <div className='itemContainer '>
                                <span><IoSettingsOutline /></span>
                                <h3 className={`mont  ${active ?'itemTitle': ''}`}>Settings</h3>
                            </div>
                        </div>


                        {active && <div className='footerSection'>
                            <p className='mont'>Help</p>
                            <p className='mont'>Contact Us</p>
                        </div>}
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Sidebar