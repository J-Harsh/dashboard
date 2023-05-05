import React from 'react'
import "./PieProductChart.scss"
import CalendarSelect from '../CalendarSelect/CalendarSelect'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

const PieProductChart = ({pieData}) => {
    const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];
    const calPerc=(num)=>{
        const sum = pieData.reduce((acc, { value }) => acc + value, 0);
        return Math.floor(num/sum*100);
    }
    return (
        <div className='subSectionWrapper'>
            <div className="subSectionHeading">
                <h3>Top Products</h3>
                <CalendarSelect fontSize={"12px"} />
            </div>
            {pieData && <div className='pieChart'>
                <ResponsiveContainer width="100%" height="100%" align="left">
                    <PieChart >
                        <Pie  data={pieData} strokeWidth={0} dataKey="value" nameKey="name"  cx="50%" cy="50%" fill="#8884d8" outerRadius={60} >
                            {pieData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="pieChartLegend">
                    {pieData?.map((item,i) => {
                        return (
                            <span key={item.name} className='mont' style={{'--bg-color':COLORS[i]}}>{item.name.substring(0,10)}<p className='lato pieChartLegendInfo'>{calPerc(item.value)}%</p></span>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}

export default PieProductChart