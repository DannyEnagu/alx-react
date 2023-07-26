import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App () {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          School dashboard
        </h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        {/* Login Form */}
        <form>
          {/* Email Feild */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          {/* Password Feild */}
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn-login'>OK</button>
          </div>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy}</p>
      </div>
    </div>
  );
}

export default App;
