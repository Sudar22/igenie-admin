import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import './App.css'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RouterIndex from "./routers/routersIndex";
import ThemeProvider from "./theme";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/stores/reduxStore";




function App() {


  return (
    <>
      <Provider store={reduxStore}>
        <HelmetProvider>
          <BrowserRouter>
            <ThemeProvider>
              <RouterIndex />
            </ThemeProvider>
          </BrowserRouter>

        </HelmetProvider>
      </Provider>
    </>
  )
}

export default App
