import './App.css';
import { useMemo, useState } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { themeSettings } from 'theme';
import MiddleMan from 'utils/MiddleMan';
import Aos from 'aos';
import ContactPage from 'Pages/ContactPage';
import HomePage from 'Pages/HomePage';
function App() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  Aos.init()
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <MiddleMan />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
