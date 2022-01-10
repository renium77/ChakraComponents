import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Hero from './components/Hero';
import {Routes, Route} from 'react-router-dom'
import Temp from './components/Templates/Temp';
import HeroComp from './components/ComponentsTemp/HeroComp';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='temp' element={<Temp/>}/>
          <Route path='herocomp' element={<HeroComp/>}/>
        </Routes>
      
      
    </ChakraProvider>
  );
}

export default App;
