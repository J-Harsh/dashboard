import React from 'react'
import "./ScheduleSection.scss"
import {AiOutlineRight} from'react-icons/ai'

const ScheduleSection = () => {
    return (
        <div className='subSectionWrapper'>
            <div className="subSectionHeading">
                <h3>Today's schedule</h3>
                <span className='mont'>See All <AiOutlineRight/></span>
            </div>
            <div className='scheduleSection'>
                <div className="scheduleItem" style={{'--item-color':"#9BDD7C"}}>
                    <h4 className='lato'>Meetings with suppliers from Kuta Bali</h4>
                    <h5 className="lato ">14.00-15.00</h5>
                    <h5 className="lato ">at Sunsetia Road, Vietnam</h5>
                </div>
                <div className="scheduleItem" style={{'--item-color':"#6972C3"}}>
                <h4 className='lato'>Meetings with suppliers from Kuta Bali</h4>
                    <h5 className="lato ">14.00-15.00</h5>
                    <h5 className="lato ">at Sunsetia Road, Vietnam</h5>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection