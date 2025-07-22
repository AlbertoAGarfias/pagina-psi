import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography, Button, Container, Box, useMediaQuery
} from '@mui/material'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import MisionVision from './pages/MisionVision'
import Contacto from './pages/Contacto'

export default function App() {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <>
      <AppBar position="sticky" color="primary" elevation={3} sx={{
        background: 'linear-gradient(90deg, #6c63ff 60%, #4ecdc4 100%)'
      }}>
        <Toolbar sx={{ gap: 2 }}>
          <PsychologyAltIcon sx={{ mr: 1, fontSize: 32 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 900, letterSpacing: 1.2 }}>
            Clínica ARUC
          </Typography>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/agenda">Agenda</Button>
          <Button color="inherit" component={Link} to="/mision-vision">Misión y Visión</Button>
          <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          pt: 0,
          minHeight: "220px",
          background: location.pathname === "/" ? "linear-gradient(120deg, #76b2fe 0%, #b69efd 100%)" : undefined,
          backgroundImage: location.pathname === "/" ? "url('/img/psicologia-header.svg')" : undefined,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center"
        }}>
        <Container maxWidth="md" sx={{ mt: isMobile ? 2 : 5, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Container>
      </Box>
      <footer style={{
        marginTop: "auto",
        background: "linear-gradient(90deg, #6c63ff 50%, #4ecdc4 100%)",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center"
      }}>
        <img src="/img/psicologia-footer.svg" alt="Ilustración salud mental" width={80} style={{ marginBottom: 12 }} />
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Clínica ARUC &copy; {new Date().getFullYear()} | Psicología para todos
        </Typography>
      </footer>
    </>
  )
}