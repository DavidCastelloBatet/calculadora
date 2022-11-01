import logo from '../images/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-contenedor">
      <img
        className="logo"
        src={logo}
        alt="Mr. Bean Calculator"
        title="Mr. Bean Calculator"
      />
      <h1>La Calculadora</h1>
      <h2>Mas o menos... científica...</h2>
    </div>
  );
};

export default Logo;
