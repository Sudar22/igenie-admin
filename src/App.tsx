import { BrowserRouter } from "react-router-dom";

import './App.css'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RouterIndex from "./routers/routersIndex";
import ThemeProvider from "./theme";




function App() {


  return (
    <>

      <BrowserRouter>
        <ThemeProvider>
          <RouterIndex />
        </ThemeProvider>
      </BrowserRouter>

    </>
  )
}

export default App
