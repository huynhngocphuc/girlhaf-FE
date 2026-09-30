import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function AdminPage() {
  return (
    <Box component="section" className="page-section empty-panel">
      <Typography className="eyebrow" variant="overline">
        Admin route / 03
      </Typography>
      <Typography variant="h1">Admin workspace.</Typography>
      <Typography className="lead" variant="body1">
        The protected route boundary is in place. The next collection of tools
        will live here.
      </Typography>
      <Typography className="panel-copy" variant="body1">
        STATUS: FOUNDATION READY
      </Typography>
    </Box>
  )
}
