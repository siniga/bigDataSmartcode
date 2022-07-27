import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import "../../css/pages/Country.css"
import Select from 'react-select'
import axios from "axios";
import Loader from '../../components/Loader';
import loadImg from "../../img/icons/Loader.gif"

  
  export const options = {
    legend: { position: 'none' },
    width:900,
    chart: {
      title: "Life expectancy at birth, total (years)",
      subtitle: "Source: World Development Indicators",
    },
    
  };
  

function Countries({isUploadSuccess, isFileUploading}) {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);
    const [timeframes, setTimeframes] = useState([]);
    const [selectedTimeframe, setSelectedTimeframe] = useState(1);
    const [isLoading, setIsloading] = useState(false);
   
    const handleChange = e => {
        setSelectedTimeframe(e.value);
    }

    useEffect(()=>{
        getYear();
    },[isUploadSuccess])

    useEffect(()=>{
       getCountries(selectedTimeframe);
    },[selectedTimeframe, isUploadSuccess])

    const getYear = () =>{
        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/timeframes",
                method: 'get',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {

           setTimeframes(response.data)
           setSelectedTimeframe(response.data[0].value)
      
         })  .catch(err => {});
    }

    const getCountries = (selectedTimeframeId) =>{
        setIsloading(true)
        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/countries/year/"+selectedTimeframeId,
                method: 'get',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {

           setCountries(response.data)
           setIsloading(false);
      
         })  .catch(err => {});
    }

  return (
    <>
    <div className='filter-wrapper' style={{display:"flex"}}>
        <span style={{marginLeft:30}}>Filter by year</span>
        <Select options={timeframes}
                    // react-select set value from state
                    // React-select set selected value
                    value={timeframes.find(obj => obj.value === selectedTimeframe)}
                    onChange={handleChange}
            />
        {isLoading ? <img src={loadImg} style={{width:40}}/> : null}
    </div>
    <div className='main-page'>
           <div className='table-wrapper' style={{width:"100%"}}>
           {isFileUploading ? <img src={loadImg} style={{width:40}}/> : null}
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Country Name</th>
                    <th>Code Name</th>
                    <th>Life expectancy at birth, total (years)</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((val, key)=>{
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.code}</td>
                                <td>{val.indicator}</td>
                                <td>{val.year}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </Table>
        </div>
    </div>
    </>)
    
}

export default Countries