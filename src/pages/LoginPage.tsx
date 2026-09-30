import { useNavigate } from 'react-router-dom'
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
    <section className="page-section narrow">
      <p className="eyebrow">Private route</p>
      <h1>Sign in</h1>
      <p className="lead">
        Authentication wiring is ready for the backend contract.
      </p>
      <button type="button" onClick={handleDemoLogin}>
        Continue with demo account
      </button>
    </section>
  )
}
