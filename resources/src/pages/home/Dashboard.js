import React, {useState, useEffect, useContext } from 'react';
import axios from "axios";
import {  BsCurrencyExchange, BsFillBarChartFill, BsFillBasketFill,  BsPieChartFill } from 'react-icons/bs';
import HorNavList from '../../components/HorNavList';
import LargeChartCard from '../../components/LargeChartCard';
import StatsCard from '../../components/StatsCard';
import VertListCard from '../../components/VertListCard';
import SalerTable from '../../components/tables/SalerTable';
import { LoginContext } from '../../context/LoginContext';
import '../../css/pages/Dashboard.css'
import SmallChartCard from '../../components/SmallChartCard';

function Dashboard() {
    const [stats, setStats] = useState([]);
    const [teamStats, setTeamStats] = useState([]);
    const [topItems, setTopItems] = useState([]);
    const [topComments, setComments] = useState([]);
    const [custumerType, setCustomerType] = useState();
    const [customerAcquision, setCustomerAcquisition] = useState();
    const [navList, setNavList] =useState([]);
    const [trendFilter, setTrendFilter] = useState(5);
    const [saleCostChartData, setSaleCostChartData] = useState();
    const {baseUrl,storageUrl, isAuthenticated, token, getRandomColor, selectedBusiness, setPageHeader} = useContext(LoginContext);

    useEffect(()=>{
        setPageHeader("Dashboard")

        setCustomerType([
            {id: 1, name: "Genge", quantity: 73},
            {id: 1, name: "Nyumbani", quantity: 12},
            {id: 1, name: "Mama ntilie", quantity: 33},
            {id: 1, name: "Mgahawa", quantity: 31}
            
        ])

        setComments([
            {id: 1, name:'Tungependa muongeze ubora wa bidhaa', percentage:'20%'},
            {id: 2, name:'Tunaomba mtukopeshe, tulipe jioni', percentage:'20%'},
            {id: 3, name:'Tunapenda huduma zenu saana, asanteni', percentage:'20%'},
            {id: 4, name:'Tunaomba mtuletee na mchele na nyama', percentage:'20%'},
            {id: 5, name:'Bidhaa zenu ni bora saana', percentage:'20%' }
        ])

        setNavList([{name:"Sales Overview"}])

        getStats()

    },[isAuthenticated,selectedBusiness])


    const getStats = () =>{

        axios(
            {
                url: baseUrl+"reports/stats/"+selectedBusiness.id,
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token 
                }        
            }
        ).then(response => {

            let statsData = response.data.success;
            setStats(
                [
                    {name: 'Number of orders', stats: statsData.sales.num_orders, bgColor:'#e4eaf6', icColor:'#3a64ee',icon: <BsPieChartFill />},
                    {name: 'Item Sold', stats:statsData.sales.total_item_sold, bgColor:' #ecf2e8', icColor:'#568925',icon: <BsFillBasketFill/> },
                    {name: 'Revenue', stats:statsData.sales.total_sales, bgColor:'#cbeaf7',icColor:'#52a2c4', icon:<BsCurrencyExchange  />},
                    {name: 'Gross Profit', stats:statsData.sales.profit, bgColor:'#faebe5',icColor:'#f5a484', icon:<BsFillBarChartFill />}
                ]
            )
            
            getStatsTrend();
      
         })  .catch(err => {});
    }

    const getStatsTrend = () =>{

        axios(
            {
                url: baseUrl+"reports/revenue/timeline/"+trendFilter+"/business/"+selectedBusiness.id,
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token 
                }        
            }
        ).then(response => {
            setSaleCostChartData(response.data);
            getTopProducts();
   
         })  .catch(err => {});
    }

    const getTopProducts = () =>{
        axios(
            {
                url: baseUrl+"reports/top_products/"+selectedBusiness.id,
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token 
                }        
            }
        ).then(response => {
        
             setTopItems(response.data.success.top_products);
             getCustomerAcusitionStats()
         })  .catch(err => {});

    }

    const getCustomerAcusitionStats = () =>{
        axios(
            {
                url: baseUrl+"reports/customer_acqusition/"+selectedBusiness.id,
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token 
                }        
            }
        ).then(response => {
            console.log(response.data)
            setCustomerAcquisition(response.data);
            getTopSalers();

         })  .catch(err => {});
    }

    const getTopSalers = () =>{
        axios(
            {
                url: baseUrl+"reports/top_salers/"+selectedBusiness.id,
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token 
                }        
            }
        ).then(response => {
            setTeamStats(response.data)
            console.log(response.data)
      
         })  .catch(err => {});
    }
    return (
        <div className='dashboard-page'>
             <div className='navbar'>
                   <HorNavList navList={navList} />
                </div>
            <div className='dashboard-content'>
                <div className='dashboard-center'>
                    <div className='stats-bar'>
                        <ul>
                            {stats.map((val, key)=>{
                                return(
                                    <li key={key}>
                                        <StatsCard stat={val} />
                                    </li>
                                )  
                            })}
                        </ul>
                    </div>
                    <div className='page-content-bar'>
                        <LargeChartCard
                            header={"Revenue and Cost"} 
                            data={saleCostChartData} 
                            time={"2022"}
                            setTrendFilter={setTrendFilter}
                            trendFilter={trendFilter}
                            getStatsTrend={getStatsTrend}
                            />
                            
                        <SalerTable  header={"Top Salers"} data={teamStats} getRandomColor={getRandomColor}/>
                    </div>
                </div>
                <div className='dashboard-right'>
                    <VertListCard
                        header={"Top Products"} 
                        currency="TZS"
                        listItems={topItems} 
                        txtFont={12}
                        storageUrl={storageUrl}
                     /> 

                    <SmallChartCard header="Customer Acquisition" data={customerAcquision} /><br/>
                    {/* <VertListCard 
                        header={"Customer Types"}
                        listItems={custumerType} 
                        txtFont={12} 
                        txtAlign={'left'}
                      /> */}
                </div>
                {/* <div className='page-content-bar' style={{marginTop:'20px'}}>
                    <VertListCard header={"Top Coments"} listItems={topComments} txtFont={12} display={'block'} txtAlign={'left'}/>
                </div> */}
                <br/>
            </div>
            
        </div>
  );
}

export default Dashboard;
