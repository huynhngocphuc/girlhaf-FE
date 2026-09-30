import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import logo from '@/assets/logo-removebg.png'

export function Footer() {
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Box className="footer-brand">
              <Box
                component="img"
                src={logo}
                alt="GirlHaf"
                className="footer-logo"
              />
              <Typography variant="body2" color="text.secondary">
                Customer frontend
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
              Foundation v1
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
