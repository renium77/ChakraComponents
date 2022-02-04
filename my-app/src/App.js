import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Hero from './components/Hero';
import {Routes, Route} from 'react-router-dom'
import Temp from './components/Templates/Temp';
import TempHero from './components/Templates/TempHero';
import TempFooter from './components/Templates/TempFooter';
import TempStats from './components/Templates/TempStats';
import TempFeatures from './components/Templates/TempFeatures';
import TempCard from './components/Templates/TempCard';
import TempResult from './components/Templates/TempResult';
import TempBanner from './components/Templates/TempBanner';

function App() {

  const theme = extendTheme({
        fonts:{
          heading:'DM Sans',
          body:'DM Sans'
        }
      })

  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/hero' element={<Hero/>}/>
          <Route path='temp' element={<Temp/>}/>
          <Route path='temphero' element={<TempHero/>}/>
          <Route path='tempfooter' element={<TempFooter/>}/>
          <Route path='tempstats' element={<TempStats/>}/>
          <Route path='tempfeatures' element={<TempFeatures/>}/>
          <Route path='tempcard' element={<TempCard/>}/>
          <Route path='tempresult' element={<TempResult/>}/>
          <Route path='tempbanner' element={<TempBanner/>}/>
        </Routes>
      
      
    </ChakraProvider>
  );
}

export default App;
