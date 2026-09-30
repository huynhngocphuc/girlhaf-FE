import { Link, NavLink } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import logo from '@/assets/logo_black.png'
import Typography from '@mui/material/Typography'

export function Header() {
  return (
    <AppBar
      className="site-header"
      position="static"
      color="inherit"
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Box
          component={Link}
          to="/"
          className="brand-mark"
          aria-label="GirlHaf home"
        >
          <Box
            component="img"
            src={logo}
            alt="GirlHaf"
            className="brand-logo"
          />
          <Typography
            component={Link}
            to="/"
            variant="h4"
            className="brand-mark"
          >
            GIRLHAF
          </Typography>
        </Box>
        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{ display: 'flex', gap: 1 }}
        >
          <Button
            className="nav-link"
            component={NavLink}
            to="/"
            startIcon={<HomeOutlinedIcon />}
          >
            Home
          </Button>
          <Button
            className="nav-link"
            component={NavLink}
            to="/account"
            startIcon={<AccountCircleOutlinedIcon />}
          >
            Account
          </Button>
          <Button
            className="nav-link"
            component={NavLink}
            to="/login"
            startIcon={<LoginOutlinedIcon />}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
