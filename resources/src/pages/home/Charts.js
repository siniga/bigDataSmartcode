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
  

function Charts({isUploadSuccess, isFileUploading, setIsFileUploading}) {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);
    const [formattedCountry, setFormattedCountry] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState(1);
    const [isLoading, setIsloading] = useState(false);
   
    const handleChange = e => {
        setSelectedCountryId(e.value);
    }

    useEffect(()=>{
        getCountries();
    },[isUploadSuccess])

    useEffect(()=>{
        getIndicatorsByCountry(selectedCountryId);
        getFormattedCountry(selectedCountryId);

    },[selectedCountryId, isUploadSuccess])

    const deleteAllData = () =>{
        setIsFileUploading(true)
        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/delete-all",
                method: 'delete',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {

            setIsFileUploading(false)
         })  .catch(err => {});
    }

    const getCountries = () =>{
        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/countries",
                method: 'get',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {
           setCountries(response.data);
           setSelectedCountryId(response.data[0].id)
         })  .catch(err => {});
    }

    const getIndicatorsByCountry = (selectedCountryId) =>{
        console.log(selectedCountryId)
        setIsloading(true);
        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/country/"+selectedCountryId,
                method: 'get',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {
           setCountry(response.data);
           setIsloading(false);

         })  .catch(err => {});
    }

    const getFormattedCountry = (selectedCountryId) =>{

        axios(
            {
                url: "http://localhost/projects/smartcode/api/public/index.php/api/country/formatted/"+selectedCountryId,
                method: 'get',
                headers: {
                    "Content-Type": "application/json", 
                }        
            }
        ).then(response => {
           setFormattedCountry(response.data)
      
         })  .catch(err => {});
    }
  return (
    <>
    <div className='top-bar'>
        <div className='filter-wrapper' >
            <span style={{marginLeft:30}}>Filter by country</span>
            <Select options={countries}
                    // react-select set value from state
                    // React-select set selected value
                    value={countries.find(obj => obj.value === selectedCountryId)}
                    onChange={handleChange}
                />
                {isLoading ? <img src={loadImg} style={{width:40}}/> : null}
        </div>
        <div className='delete-wrapper' onClick={deleteAllData}>
            <span>Delete All</span>
        </div>
    </div>
    <div className='main-page'>
           <div className='table-wrapper'>
           {isFileUploading ? <img src={loadImg} style={{width:40}}/> : null}
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Life expectancy at birth, total (years)</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {country.map((val, key)=>{
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{val.indicator}</td>
                                <td>{val.year}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </Table>
        </div>
        <div className='chart-wrapper'>
           <div style={{marginLeft:40, marginTop:40}}>
            <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={formattedCountry}
                    options={options}
                    />
           </div>
        </div>
      
    </div>
    </>)
    
}

export default Charts