import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export function NotFoundPage() {
  return (
    <Box component="section" className="page-section narrow empty-panel">
      <Typography className="eyebrow" variant="overline">
        404 / Missing page
      </Typography>
      <Typography variant="h1">Page not found.</Typography>
      <Button className="primary-action" component={Link} to="/">
        Return home
      </Button>
    </Box>
  )
}
