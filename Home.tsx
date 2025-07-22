import { Box, Typography, Paper, Chip, Grid, Button, Divider } from '@mui/material'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import { keyframes } from '@emotion/react'

const gradientText = {
  background: 'linear-gradient(90deg, #6c63ff 10%, #4ecdc4 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 900,
  letterSpacing: 1.1,
  fontFamily: "'Rubik', 'Nunito', Arial, sans-serif"
}

const shadowCard = {
  boxShadow: '0 8px 32px 0 rgba(76, 99, 255, 0.12), 0 1.5px 4px 0 rgba(0,0,0,0.04)'
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(48px) scale(0.97);}
  to { opacity: 1; transform: translateY(0) scale(1);}
`
const underlineAnim = keyframes`
  from { width: 0; }
  to { width: 120px; }
`

export default function Home() {
  return (
    <Paper
      sx={{
        p: { xs: 2, md: 6 },
        borderRadius: 6,
        background: "rgba(255,255,255,0.97)",
        ...shadowCard,
        animation: `${fadeIn} 1.2s cubic-bezier(.38,1.15,.42,1)`,
        mt: { xs: 1, md: 4 },
      }}
      elevation={0}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7} sx={{ pr: { md: 4 } }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              ...gradientText,
              fontSize: { xs: '2.1rem', md: '2.7rem' },
              mb: 1,
              position: 'relative',
              zIndex: 1
            }}
          >
            <PsychologyAltIcon sx={{ mb: -0.5, mr: 1, fontSize: 42, color: '#6c63ff' }} />
            Clínica ARUC
            <Box
              sx={{
                height: 5,
                borderRadius: 3,
                background: 'linear-gradient(90deg,#4ecdc4 0%,#6c63ff 100%)',
                position: 'absolute',
                left: 0,
                bottom: -5,
                animation: `${underlineAnim} 1.1s 0.4s both cubic-bezier(.38,1.15,.42,1)`
              }}
            />
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              textShadow: '0 2px 10px #b8bfff60',
              fontWeight: 700,
              mb: 2
            }}
          >
            Lic. Alberto Angeles <EmojiEmotionsIcon sx={{ mb: -0.5, color: '#4ecdc4' }} />
          </Typography>
          <Chip
            color="primary"
            icon={<FamilyRestroomIcon />}
            label="Cédula profesional: 13043171"
            sx={{ mb: 2, fontWeight: 'bold' }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.15rem',
              mb: 2,
              color: '#22334d'
            }}
          >
            Atención <b>ética, inclusiva y empática</b> para todas las edades.<br />
            <b>¡Tu bienestar emocional es nuestra prioridad!</b>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={1}>
            <Grid item>
              <Chip
                label="Humanismo"
                sx={{
                  background: 'linear-gradient(90deg,#4ecdc4,#a7ffeb)', color: '#22334d', fontWeight: 600
                }}
              />
            </Grid>
            <Grid item>
              <Chip
                label="Cognitivo Conductual"
                sx={{
                  background: 'linear-gradient(90deg,#6c63ff,#a7ffeb)', color: '#fff', fontWeight: 600
                }}
              />
            </Grid>
            <Grid item>
              <Chip
                label="Psicoanálisis"
                sx={{
                  background: 'linear-gradient(90deg,#a7ffeb,#6c63ff)', color: '#22334d', fontWeight: 600
                }}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={1}>
            <Grid item>
              <Chip icon={<SelfImprovementIcon />} label="Terapia individual" sx={{ bgcolor: "#ededfa", fontWeight: 600 }} />
            </Grid>
            <Grid item>
              <Chip icon={<Diversity3Icon />} label="Terapia familiar" sx={{ bgcolor: "#eafff9", fontWeight: 600 }} />
            </Grid>
            <Grid item>
              <Chip icon={<FamilyRestroomIcon />} label="Terapia de pareja" sx={{ bgcolor: "#f2eaff", fontWeight: 600 }} />
            </Grid>
            <Grid item>
              <Chip label="Orientación vocacional" sx={{ bgcolor: "#eafff7", fontWeight: 600 }} />
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ mt: 3, color: '#4b5468' }}>
            <b>Modalidad:</b> Presencial en Toluca y Online (Google Meet)
            <br />
            <b>Horario:</b> Lunes a viernes 9:00 a 21:00 | Sábados y domingos según disponibilidad.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/agenda"
            sx={{
              mt: 4,
              background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
              color: '#fff',
              fontWeight: 900,
              fontSize: '1.1rem',
              px: 4,
              py: 1.3,
              borderRadius: 6,
              boxShadow: '0 4px 24px 0 #b8bfff44',
              transition: 'transform .2s cubic-bezier(.44,1.2,.67,1.01),box-shadow .2s',
              '&:hover': {
                background: 'linear-gradient(70deg,#4ecdc4,#6c63ff 80%)',
                transform: 'scale(1.05)',
                boxShadow: '0 8px 32px 0 #6c63ff33'
              }
            }}
          >
            Agenda tu cita ahora
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <img
              src="/img/Meditation-cuate.svg"
              alt="Ilustración psicólogo salud mental"
              width="96%"
              style={{
                maxWidth: 350,
                borderRadius: 24,
                boxShadow: "0 3px 24px rgba(76,99,255,0.13)",
                animation: 'floatY 3.5s ease-in-out infinite alternate'
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{
        mt: 5,
        p: { xs: 2, md: 4 },
        borderRadius: 5,
        background: 'linear-gradient(90deg,#e3f0ff 40%,#f9f9f9 100%)',
        ...shadowCard,
        animation: `${fadeIn} 2.4s .3s both cubic-bezier(.38,1.15,.42,1)`
      }}>
        <Typography variant="h6" sx={{ color: '#6c63ff', fontWeight: 800, mb: 1 }}>
          <EmojiEmotionsIcon sx={{ mb: -0.5, color: '#4ecdc4' }} />
          Ubicación y contacto:
        </Typography>
        <Typography variant="body1">
          <b>Consultorio 1:</b> Miguel Salinas 305, Col. Altamirano, Toluca.<br />
          <b>Consultorio 2:</b> Avenida Pino Suárez #80, Toluca. &nbsp;
          <a href="https://www.google.com/maps?q=19.2846881,-99.6211001&z=17&hl=es" target="_blank" style={{ color: "#6c63ff", fontWeight: 800 }}>
            Ver mapa
          </a>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <b>Facebook:</b> <a href="https://www.facebook.com/profile.php?id=100086022831324" target="_blank" style={{ color: "#4ecdc4", fontWeight: 800 }}>
            Clínica ARUC
          </a>
        </Typography>
      </Box>
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0px);}
          100% { transform: translateY(-18px);}
        }
      `}</style>
    </Paper>
  )
}