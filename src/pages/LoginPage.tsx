import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { setCredentials } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/app/hooks'

export function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDemoLogin = () => {
    dispatch(
      setCredentials({
        accessToken: 'demo-token',
        user: { id: 'demo-user', name: 'Demo user' },
      }),
    )
    navigate('/account')
  }

  return (
    <Box component="section" className="page-section narrow auth-panel">
      <Typography className="eyebrow" variant="overline">
        Private route / 02
      </Typography>
      <Typography variant="h1">Sign in.</Typography>
      <Typography className="lead" variant="body1">
        Your private edit starts here. Authentication wiring is ready for the
        backend contract.
      </Typography>
      <Button
        className="primary-action"
        variant="contained"
        onClick={handleDemoLogin}
      >
        Continue with demo account
      </Button>
    </Box>
  )
}
