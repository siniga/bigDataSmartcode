import {PureComponent} from 'react'
import { Chart } from "react-google-charts";
import '../css/components/SmallChartCard.css'
import { LineChart, Line,   XAxis, } from "recharts";

function SmallChartCard({header, data}) {
      
      const options = {
        title: "",
        pieHole: 0.5,
        is3D: false,
        legend: {position:'bottom'},
        pieSliceText: 'none',
          colors:['#b3f8a0','#5baa46','#468daa']
      };
      
  return (
        <div className='small-chart-card'>
            <div className='main-headers'>
                <span>{header}</span><br/>
                {/* <span className='sub-header'>Customer Acquisition trend for the past three months</span> */}
            </div>
            <span className='sub-header'>
            Customer Acquisition trend for the past three months
            </span>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"270px"}
                />
            
        </div>
  )
}

export default SmallChartCard