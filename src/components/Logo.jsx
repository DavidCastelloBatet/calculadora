import logo from '../images/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo"
        src={logo}
        alt="Mr. Bean Calculator"
        title="Mr. Bean Calculator"
      />
      <h1>La Calculadora</h1>
    </div>
  );
};

export default Logo;
