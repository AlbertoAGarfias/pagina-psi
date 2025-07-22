import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#6c63ff' }, // violeta psicología
    secondary: { main: '#4ecdc4' }, // verde menta
    background: { default: '#f8fafc' },
    error: { main: '#ff6b6b' },
    info: { main: '#38a1db' },
    success: { main: '#00b894' },
    text: { primary: '#22334d' }
  },
  typography: {
    fontFamily: "'Nunito', 'Rubik', Arial, sans-serif",
    h4: { fontWeight: 900, letterSpacing: 1.2 }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)