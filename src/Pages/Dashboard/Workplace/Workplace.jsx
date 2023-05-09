import React, { useEffect } from 'react'
import "./workplace.scss"
import { BiBell } from "react-icons/bi"
import { AiOutlineSearch } from 'react-icons/ai'
import { GrMoney } from "react-icons/gr"
import { BsTags } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"
import { RiGroupLine } from "react-icons/ri"
import SplineChart from '../SplineChart/SplineChart'
import CalendarSelect from "../CalendarSelect/CalendarSelect"
import PieProductChart from "../PieProductChart/PieProductChart"
import ScheduleSection from "../ScheduleSection/ScheduleSection"
import { useState } from 'react'
import axios from 'axios'
import CustomLoader from '../../../Components/CustomLoader/CustomLoader'
import { AuthState } from '../../../util/AuthContext'
import { auth } from '../../../util/firebase'
import { useNavigate } from 'react-router-dom'

const Workplace = () => {
    const user = AuthState()
    const navigate = useNavigate()
    const [lineData, setLineData] = useState()
    const [pieData, setPieData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true);
            try {
                const lineRes = await axios.get('https://my.api.mockaroo.com/listed_line_chart.json?key=bf4c0ee0');
                const pieRes = await axios.get('https://my.api.mockaroo.com/pie_chart.json?key=bf4c0ee0');
                setLineData(lineRes?.data);
                setPieData(pieRes?.data)

            } catch (error) {
                console.log(error);
                setError(error);
            }

            setIsLoading(false);
        }
        fetchData();
    }, []);

    const genRandomNum = () => {
        return Math.floor(Math.random() * (100000) - 1000)
    }

    const handleLogout = async () => {
        try {

            await auth.signOut();
            navigate("/login",{replace:true})
            console.log('Successfully signed out');

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        isLoading ? <div><CustomLoader /></div> :
            <div style={{
                width: "100%", height: "100%", margin: "10px 40px 10px 20px",
                display: "flex", flexDirection: "column"
            }} >

                <div className='navbar'>
                    <h2 className='mont' style={{ fontSize: "24px", lineHeight: "29.26px" }}>Dashboard</h2>
                    <div className='rightBar'>
                        <form>
                            <input type="search" placeholder="Search..." />
                            <button onClick={(e) => e.preventDefault()} type="submit"><i><AiOutlineSearch /></i></button>
                        </form>
                        <i><BiBell /></i>
                        <img onClick={handleLogout} src={user?.photoURL || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="profile image" />
                    </div>
                </div>

                <div className='firstRow'>
                    <div className='card' style={{ backgroundColor: "#DDEFE0" }}>
                        <i className='cardIcon'><GrMoney /></i>
                        <div>
                            <h4 className='cardHeading'>Total Revenue</h4>
                            <h2 className='cardData'> ${genRandomNum()}  </h2>
                        </div>
                    </div>
                    <div className='card' style={{ backgroundColor: "#F4ECDD" }}>
                        <i className='cardIcon'><BsTags /></i>
                        <div>
                            <h4 className='cardHeading'>Total Transactions</h4>
                            <h2 className='cardData'> {genRandomNum()}  </h2>
                        </div>
                    </div>
                    <div className='card' style={{ backgroundColor: "#EFDADA" }}>
                        <i className='cardIcon'><AiOutlineLike /></i>
                        <div>
                            <h4 className='cardHeading'>Total Likes</h4>
                            <h2 className='cardData'> {genRandomNum()}  </h2>
                        </div>
                    </div>
                    <div className='card' style={{ backgroundColor: "#DEE0EF" }}>
                        <i className='cardIcon'><RiGroupLine /></i>
                        <div>
                            <h4 className='cardHeading'>Total Users</h4>
                            <h2 className='cardData'> {genRandomNum()}  </h2>
                        </div>
                    </div>
                </div>

                <div className='chartSection'>
                    <h3 className='mont'>Activities</h3>
                    <div className='chartUtil'>

                        <CalendarSelect fontSize={"14px"} />
                        <div className='legend'>
                            <span className='guestIcon lato'>Views</span>
                            <span className='userIcon lato'>Likes</span>
                        </div>
                    </div>
                    <SplineChart lineData={lineData} />
                </div>

                <div className="smallChartSection">
                    <PieProductChart pieData={pieData} />
                    <ScheduleSection />
                </div>

            </div>
    )
}

export default Workplace