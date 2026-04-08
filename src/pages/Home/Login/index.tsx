import './styles.css'
import Button from 'components/Button'

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>

      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block"></div>
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block"></div>
        </div>

        <div className="login-submit">
          <Button text="Fazer login" />
        </div>
      </form>
    </div>
  )
}

export default Login
