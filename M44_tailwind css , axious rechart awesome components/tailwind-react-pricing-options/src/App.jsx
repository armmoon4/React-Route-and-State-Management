import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch('pricingData.json').then(res => res.json());
const markPromise = axios.get('marksData.json');
function App() {
  return (
    <>

      <header>
        {/* <Navbar></Navbar> */}
        <DaisyNav></DaisyNav>
      </header>

      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>


      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}> 
        <MarksChart markPromise={markPromise}></MarksChart>
      </Suspense>


    <ResultChart></ResultChart>


      </main>
      
 
    </>
  )
}

export default App
