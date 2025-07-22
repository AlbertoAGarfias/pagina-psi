import { Paper, Typography, Link, List, ListItem, ListItemText, Divider, Box } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(32px);}
  to { opacity: 1; transform: translateY(0);}
`

export default function Contacto() {
  return (
    <Paper sx={{
      p: 4,
      borderRadius: 6,
      background: "rgba(255,255,255,0.97)",
      boxShadow: 4,
      animation: `${fadeIn} 1.1s cubic-bezier(.38,1.15,.42,1)`
    }}>
      <Typography variant="h4" gutterBottom sx={{
        background: 'linear-gradient(90deg,#6c63ff,#4ecdc4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 900,
        letterSpacing: 1.1,
        mb: 1
      }}>
        <EmailIcon sx={{ mb: -0.5, mr: 1, fontSize: 38, color: "#4ecdc4" }} />
        Contacto
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box>
        <List>
          <ListItem>
            <ListItemText
              primary={<><EmailIcon sx={{ mb: -0.5, mr: 1 }} />Correo electrónico 1</>}
              secondary={
                <Link href="mailto:alberto.angeles.g@gmail.com" sx={{ color: "#6c63ff", fontWeight: 700 }}>
                  alberto.angeles.g@gmail.com
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<><EmailIcon sx={{ mb: -0.5, mr: 1 }} />Correo electrónico 2</>}
              secondary={
                <Link href="mailto:mi.espacio.analitico@gmail.com" sx={{ color: "#6c63ff", fontWeight: 700 }}>
                  mi.espacio.analitico@gmail.com
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<><WhatsAppIcon sx={{ mb: -0.5, mr: 1, color: "#43d854" }} />WhatsApp</>}
              secondary={
                <Link href="https://wa.me/527226540066" target="_blank" sx={{ color: "#43d854", fontWeight: 700 }}>
                  +52 722 654 0066
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<><FacebookIcon sx={{ mb: -0.5, mr: 1, color: "#3b5998" }} />Facebook</>}
              secondary={
                <Link href="https://www.facebook.com/profile.php?id=100086022831324" target="_blank" sx={{ color: "#3b5998", fontWeight: 700 }}>
                  Clínica ARUC
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<><LocationOnIcon sx={{ mb: -0.5, mr: 1, color: "#6c63ff" }} />Ubicaciones</>}
              secondary={
                <>
                  <strong>Consultorio 1:</strong> Miguel Salinas 305, Col. Altamirano, Toluca<br />
                  <strong>Consultorio 2:</strong> Av. Pino Suárez #80, Toluca
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Paper>
  )
}