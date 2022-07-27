import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import {BrowserRouter, Routes, Route, Navigate, HashRouter, useNavigate} from 'react-router-dom';
import Countries from './pages/home/Countries';
import Charts from './pages/home/Charts';

function App() {
  const [isUploadSuccess, setUploadIsSuccess] = useState(false);
  const [isFileUploading, setIsFileUploading] = useState(false);

  return (
    <div className="App">
      <div className='app-main-container'>
        <HashRouter>
          {/* <div className='left-sidebar'>
             <LeftSideBar />
          </div> */}
          <div className='app-page-content authenticated'>
             <header className="app-header">
                <Header setUploadIsSuccess={setUploadIsSuccess} setIsFileUploading={setIsFileUploading}/> 
              </header>
      
            <div className='pages'>
                <Routes>
                <Route exact path="/"  
                      element={<Countries setIsFileUploading={setIsFileUploading} isUploadSuccess={isUploadSuccess} isFileUploading={isFileUploading}/>} />
                  <Route exact path="/chart"  
                        element={<Charts setIsFileUploading={setIsFileUploading}  isUploadSuccess={isUploadSuccess} isFileUploading={isFileUploading}/>} />
                </Routes>
            
            </div>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
