import logo from './logo.svg';
import './App.css';
import Panel from './components/Panel';
import AboutMe from './components/AboutMe';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextUIProvider} from "@nextui-org/react";



function App() {
  return (

    <div className="App">
      <NextUIProvider>
        <Panel/>
      </NextUIProvider>
    </div>
  );
}

export default App;
