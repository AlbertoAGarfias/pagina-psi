import { Paper, Typography, Divider, Box } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(32px);}
  to { opacity: 1; transform: translateY(0);}
`

export default function MisionVision() {
  return (
    <Paper sx={{
      p: 4,
      borderRadius: 6,
      background: "rgba(255,255,255,0.97)",
      boxShadow: 4,
      animation: `${fadeIn} 1s cubic-bezier(.38,1.15,.42,1)`
    }}>
      <Typography variant="h4" gutterBottom sx={{
        background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 900,
        letterSpacing: 1.1,
        mb: 1
      }}>
        <GroupsIcon sx={{ mb: -0.5, mr: 1, fontSize: 38, color: "#4ecdc4" }} />
        Misión y Visión
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#6c63ff", fontWeight: 800 }}>
          <EmojiObjectsIcon sx={{ mb: -0.5, mr: 1, color: "#4ecdc4" }} />
          Misión
        </Typography>
        <Typography variant="body1" sx={{ color: "#22334d", mb: 2 }}>
          Brindar atención psicológica integral, ética y profesional, promoviendo el bienestar emocional y mental de nuestros pacientes a través de enfoques humanistas, cognitivo-conductuales y psicoanalíticos. Buscamos acompañar a niños, adolescentes, adultos y adultos mayores en sus procesos de cambio, crecimiento personal y superación de dificultades, en un ambiente de respeto, empatía y confidencialidad.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "#6c63ff", fontWeight: 800 }}>
          <GroupsIcon sx={{ mb: -0.5, mr: 1, color: "#4ecdc4" }} />
          Visión
        </Typography>
        <Typography variant="body1" sx={{ color: "#22334d" }}>
          Ser una clínica psicológica de referencia en Toluca y el Estado de México, reconocida por la calidad humana y profesional de nuestros servicios, la actualización continua y la innovación terapéutica, contribuyendo a la construcción de una sociedad más sana, consciente y resiliente.
        </Typography>
      </Box>
    </Paper>
  )
}