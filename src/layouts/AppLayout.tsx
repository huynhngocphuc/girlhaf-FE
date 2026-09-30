import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function AppLayout() {
  return (
    <Box className="app-shell">
      <Header />
      <Box component="main" className="app-main">
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }}>
            <Grid size={{ xs: 12 }}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
