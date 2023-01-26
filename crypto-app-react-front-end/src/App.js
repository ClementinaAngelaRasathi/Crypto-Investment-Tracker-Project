import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPwd from './components/ForgotPwd'
import Dashboard from './components/Dashboard'
import Unauthorised from './components/Unauthorised'
import CoinMarkets from './components/Tables/CoinMarkets'
import Dashboard2 from './components/Dashboard2'
import LiveReports from './components/Lists/live_reports/LiveReports'
import Footer from './Footer'
import Selection from './Selection'
import FetchCoins from './components/Lists/fetch_coins/FetchCoins'
import CardCoins from './components/Lists/card_coins/CardCoins'
import Homepage from './components/Homepage'
import History from './components/History'
import News from './components/News'
import Contactform from './components/Contactform'
import authService from './components/Auth/AuthService'
import PrivateRoute from './components/Auth/PrivateRoute'
import AssetPlatforms from './components/Statistics/AssetPlatforms'
import Categories from './components/Statistics/Categories'
import Exchanges from './components/Statistics/Exchanges'
import MarketIndexes from './components/Statistics/MarketIndexes'
import BarChart from './components/Charts/BarChart'
import PieChart from './components/Charts/PieChart'
import LineChart from './components/Charts/LineChart'
import DoughnutChart from './components/Charts/DoughnutChart'
import AreaChart from './components/Charts/AreaChart'
import PolarAreaChart from './components/Charts/PolarAreaChart'
import EnquiryForm from './components/EnquiryForm'
import AutoPlaySwipeableViews from './components/Statistics/AutoPlaySwipeableViews'



function App() {


  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  useEffect(() => {
    document.body.style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XwFpw1hMTJD7g-ci5MaGiNwkPhD-Nv9iAQ&usqp=CAU')`;

  }, [])


  
  
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
      <Route path='/' element={<Homepage />} />
        {/* <Route path='/data' element={<Coins coins={coins} />} /> */}
        {/* <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<ForgotPwd/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        {/* <Route path='/dashboard2' element={<Dashboard2/>}/> */}

        <Route path='*' element={<Unauthorised/>}/>
        {/* <Route path='/tables' element={<CoinMarkets/>}/> */}
        <Route path='/selection' element={<Selection />}/>
        <Route path='/livereports' element={<LiveReports/>}/>
        <Route path='/coins' element={<FetchCoins/>}/>
        {/* <Route path='/history' element={<History/>}/> */}
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contactform/>}/>
        {/* <Route path='/assets' element={<AssetPlatforms/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/marketindex' element={<MarketIndexes/>}/> */}



        <Route element={<PrivateRoute />} >
        <Route path='/data' element={<Coins coins={coins}  />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard2' element={<Dashboard2/>}/>
        <Route path='/tables' element={<CoinMarkets/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/tobar' element={<BarChart/>}/>
        <Route path='/topie' element={<PieChart/>}/>
        <Route path='/toline' element={<LineChart/>}/>
        <Route path='/todoughnut' element={<DoughnutChart/>}/>
        <Route path='/toarea' element={<AreaChart/>}/>
        <Route path='/topolar' element={<PolarAreaChart/>}/>
        <Route path='/enquiry' element={<EnquiryForm/>}/> 


        </Route>



      </Routes>
      {/* <Footer /> */}
      </div>
      
      );
}

export default App;
