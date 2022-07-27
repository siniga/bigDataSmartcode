import {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
import '../css/components/LargeChartCard.css'

function LargeChartCard({header, data, time, setTrendFilter, trendFilter, getStatsTrend}) {
    const [active, setActive] = useState(5);

    const timeline = [
            {id:1, time :'Today'}, 
            {id:2, time:'This Week'},
            {id:3, time:'This Month'}, 
            {id:4,time:'This Quarter'}, 
            {id:5,time:'This Year'}
    ];

    const makeActive = (val) =>{
        setTrendFilter(val);
        setActive(val);
    }

    useEffect(()=>{
       getStatsTrend();
    },[trendFilter]);

    const options = {
        chart: {
        //   title: "Company Performance",
          // subtitle: "Revenue & Costs: "+time,
        },
        colors:['#b3f8a0','#468daa','#5baa46']
      };
      
  return (
      <div className='large-chart-card'>
         <div className='main-headers'>
            <span>{header}</span>
        </div>
        <div className='chart-card-filter-wrapper'>
          <ul>
              {timeline.map((val)=>{
                 return <li 
                            key={val.id} 
                            className={active  === val.id ? 'active' : '' }
                            onClick={()=>makeActive(val.id)}>{val.time}
                        </li>
              })}
          </ul>
        </div>
        <br />
        <Chart
            chartType="Bar"
            width="98%"
            height="330px"
            data={data}
            options={options}
            />
      </div>
  );
}

export default LargeChartCard;
