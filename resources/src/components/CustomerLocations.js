import {useEffect,  useRef } from 'react'
import '../css/components/CustomerLocations.css';
import L from "leaflet";
import { city_data }  from './TestData'

function CustomerLocations() {
    const mapRef = useRef(null)
    const tileRef = useRef(null)
    const controlRef = useRef(null)
    const layerRef = useRef(null)
  
    // Base tile for the map:
    tileRef.current = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    const mapStyles = {
      overflow: "hidden",
      width: "100%",
      height: "100vh"
    };
  
    // Options for our map instance:
    const mapParams = {
      center: [37.0902, -95.7129], // USA
      zoom: 3,
      zoomControl: false,
      maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
      closePopupOnClick: false,
      layers: [tileRef.current] // Start with just the base layer
    };
    
    // Map creation:
    useEffect(() => {
      mapRef.current = L.map("map", mapParams);
    }, []);
  
    // Controls:
    useEffect(() => {
      // Add the base layer to the control:
      controlRef.current = L.control.layers(
        { OpenStreetMap: tileRef.current }
      ).addTo(mapRef.current);
  
      // Add zoomControl:
      L.control.zoom({ 
        position: "topright" 
      }).addTo(mapRef.current);
    }, [])
  
    // Map events:
    useEffect(() => {
      mapRef.current.on("zoomstart", () => {
        console.log("ZOOM STARTED");
      });
    }, [])
  
    // Create the layerGroup:
    useEffect(() => {
      layerRef.current = L.layerGroup().addTo(mapRef.current);
      controlRef.current.addOverlay(layerRef.current, 'Circles')
    }, [])
  
    // Add the city circles to the map:
    useEffect(() => {
      layerRef.current.clearLayers()
      Array.from(city_data).forEach(city => {
        L.circle(city.latLng, { radius: 100000 }).addTo(
          layerRef.current
        );
      });
    }, [city_data])

  return (
    <div className='customer-locations-page'>
        <div className='customer-locations-sidebar'></div>
        <div className='customer-locations-map'>
        <div id="map" style={mapStyles} cityData={city_data}/>
        </div>
    </div>
  )
}

export default CustomerLocations