import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    return (
        <div className="charts">
            {props.dataPoints.map((data) => (
                <ChartBar value={data.value} maxValue={null} label={data.label} key={data.label} />
            ))}
        </div>
    )
}

export default Chart
