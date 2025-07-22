import { useState } from 'react'
import {
  Box, Paper, Typography, TextField, Button, MenuItem, Alert, Link, InputAdornment, Divider
} from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(36px);}
  to { opacity: 1; transform: translateY(0);}
`

const initialForm = {
  nombre: '',
  correo: '',
  telefono: '',
  modalidad: '',
  servicio: '',
  fecha: '',
  hora: '',
  comentarios: ''
}

export default function Agenda() {
  const [form, setForm] = useState(initialForm)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Cambia este ID por el tuyo de Formspree
 const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID"
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    setEnviado(false)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setEnviado(true)
        setForm(initialForm)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <Paper sx={{
      p: 4,
      borderRadius: 6,
      background: "rgba(245,255,250,0.98)",
      boxShadow: 4,
      animation: `${fadeIn} 1.1s cubic-bezier(.38,1.15,.42,1)`
    }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{
        fontWeight: 900,
        background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 1
      }}>
        <EventAvailableIcon sx={{ mb: -0.5, mr: 1, fontSize: 36 }} />
        Agenda tu cita
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        Completa el formulario y te contactaremos pronto.<br />
        O por WhatsApp:&nbsp;
        <Link href="https://wa.me/527226540066" target="_blank" sx={{ color: "#4ecdc4", fontWeight: 700 }}>+52 722 654 0066</Link>
      </Typography>
      {enviado && <Alert severity="success" sx={{ my: 2 }}>¡Cita solicitada! Te contactaremos pronto para confirmar.</Alert>}
      {error && <Alert severity="error" sx={{ my: 2 }}>Hubo un error al enviar tu solicitud. Intenta de nuevo más tarde.</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField required name="nombre" label="Nombre completo" value={form.nombre} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField required type="email" name="correo" label="Correo electrónico" value={form.correo} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField required name="telefono" label="Teléfono o WhatsApp" value={form.telefono} onChange={handleChange} fullWidth sx={{ mb: 2 }} InputProps={{ startAdornment: <InputAdornment position="start">+52</InputAdornment> }} />
        <TextField select required name="modalidad" label="Modalidad" value={form.modalidad} onChange={handleChange} fullWidth sx={{ mb: 2 }}>
          <MenuItem value="Presencial">Presencial</MenuItem>
          <MenuItem value="Online por Google Meet">Online por Google Meet</MenuItem>
        </TextField>
        <TextField select required name="servicio" label="Tipo de servicio" value={form.servicio} onChange={handleChange} fullWidth sx={{ mb: 2 }}>
          <MenuItem value="Terapia individual">Terapia individual</MenuItem>
          <MenuItem value="Terapia de pareja">Terapia de pareja</MenuItem>
          <MenuItem value="Terapia familiar">Terapia familiar</MenuItem>
          <MenuItem value="Orientación vocacional">Orientación vocacional</MenuItem>
          <MenuItem value="Otra">Otra</MenuItem>
        </TextField>
        <TextField required name="fecha" label="Fecha preferida" type="date" value={form.fecha} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
        <TextField required name="hora" label="Hora preferida" type="time" value={form.hora} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
        <TextField name="comentarios" label="Comentarios / Motivo de consulta (opcional)" value={form.comentarios} onChange={handleChange} multiline rows={3} fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary" type="submit" disabled={enviado} sx={{
          fontWeight: 900,
          fontSize: '1.1rem',
          letterSpacing: 1.1,
          background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
          borderRadius: 5,
          mt: 2,
          px: 4,
          boxShadow: '0 4px 24px 0 #b8bfff44',
          transition: 'transform .2s,box-shadow .2s',
          '&:hover': {
            background: 'linear-gradient(70deg,#4ecdc4,#6c63ff 80%)',
            transform: 'scale(1.04)',
            boxShadow: '0 8px 32px 0 #6c63ff33'
          }
        }}>
          Solicitar cita
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 4 }}>
        También puedes agendar usando Google Calendar: <br />
        <a href="https://calendar.google.com/calendar/u/0/r?cid=mi.espacio.analitico@gmail.com" target="_blank" rel="noopener" style={{ color: "#6c63ff", fontWeight: 700 }}>
          Agendar con Google Calendar
        </a>
      </Typography>
    </Paper>
  )
}