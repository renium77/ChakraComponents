import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Hero from './components/Hero';
import {Routes, Route} from 'react-router-dom'
import Temp from './components/Templates/Temp';
import HeroComp from './components/ComponentsTemp/HeroComp';
import FooterComp from './components/ComponentsTemp/FooterComp';
import TempHero from './components/Templates/TempHero';
import TempFooter from './components/Templates/TempFooter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='temp' element={<Temp/>}/>
          <Route path='temphero' element={<TempHero/>}/>
          <Route path='tempfooter' element={<TempFooter/>}/>
        </Routes>
      
      
    </ChakraProvider>
  );
}

export default App;
