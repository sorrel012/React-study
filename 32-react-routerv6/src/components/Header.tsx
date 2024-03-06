import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={handleClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
