import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sydney from "./routes/sydney"
import Tenerife from "./routes/tenerife"
import Tulum from "./routes/tulum"
import Mexico from "./routes/mexico"
import Mauritius from "./routes/mauritius"
import StTropez from "./routes/st-tropez"
import Boston from "./routes/boston"
import Paris from "./routes/paris"
import CardInfo from "./CardInfo.js"



export default function App() {
    
  return ( 

      <div className="container">
        <Navbar />

        <Routes>
           <Route exact path="/" element={<CardInfo />} />
           <Route path="/sydney" element={<Sydney />} />
           <Route path="/tenerife" element={<Tenerife />} />
           <Route path="/tulum" element={<Tulum />} />
           <Route path="/mexico" element={<Mexico />} />
           <Route path="/mauritius" element={<Mauritius />} />
           <Route path="/st-tropez" element={<StTropez />} />
           <Route path="/boston" element={<Boston />} />
           <Route path="/paris" element={<Paris />} />
        </Routes>
        
        
       <Footer />
      </div>
      
    ) 
}


<>
<Navbar />
<Router>
   
   <Routes>
           <Route exact path="/" element={<App />} />
           <Route path="/sydney" element={<Sydney />} />
           <Route path="/tenerife" element={<Tenerife />} />
           <Route path="/tulum" element={<Tulum />} />
           <Route path="/mexico" element={<Mexico />} />
           <Route path="/mauritius" element={<Mauritius />} />
           <Route path="/st-tropez" element={<StTropez />} />
           <Route path="/boston" element={<Boston />} />
           <Route path="/paris" element={<Paris />} />
   </Routes>
    
</Router>
<Footer />
</>