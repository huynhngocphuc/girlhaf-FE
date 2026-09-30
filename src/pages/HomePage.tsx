import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined'
import EastIcon from '@mui/icons-material/East'

export function HomePage() {
  return (
    <Box component="section" className="page-section">
      <Box className="hero-layout">
        <Box className="hero-copy">
          <Typography className="eyebrow" variant="overline">
            Customer frontend / 2026
          </Typography>
          <Typography variant="h1">Build your everyday edit.</Typography>
          <Typography className="lead" variant="body1">
            A considered storefront for the pieces you reach for most. Product,
            cart and checkout are ready to take shape here.
          </Typography>
          <Typography className="text-link" component="a" href="#foundation">
            Explore the foundation{' '}
            <ArrowOutwardIcon sx={{ fontSize: 15, verticalAlign: 'middle' }} />
          </Typography>
        </Box>
        <Box className="hero-note">
          <Box className="hero-note-mark">
            <CheckroomOutlinedIcon sx={{ fontSize: 58 }} />
          </Box>
          <Typography component="p">
            A quiet starting point for a wardrobe with a point of view.
          </Typography>
        </Box>
      </Box>
      <Grid id="foundation" className="bento-grid" container spacing="1px">
        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="info-panel">
            <Typography className="panel-index">01 / PRODUCT</Typography>
            <Typography className="panel-title">Find your uniform.</Typography>
            <Typography className="panel-copy">
              A clear home for future collections and considered product detail.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="info-panel accent">
            <Typography className="panel-index">02 / CART</Typography>
            <Typography className="panel-title">Keep it simple.</Typography>
            <Typography className="panel-copy">
              A focused path from first look to the pieces that belong with you.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="info-panel">
            <Typography className="panel-index">03 / CHECKOUT</Typography>
            <Typography className="panel-title">
              Almost there{' '}
              <EastIcon sx={{ fontSize: 23, verticalAlign: 'middle' }} />
            </Typography>
            <Typography className="panel-copy">
              Secure, direct and ready for the next layer of the experience.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
