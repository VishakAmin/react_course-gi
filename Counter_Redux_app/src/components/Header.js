import { useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {

  const auth = useSelector(state => state.auth.isAuthenticated)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
                <nav>
                <ul>
                  <li>
                    <a href='/'>My Products</a>
                  </li>
                  <li>
                    <a href='/'>My Sales</a>
                  </li>
                  <li>
                    <button>Logout</button>
                  </li>
                </ul>
              </nav>
        
      )}
    </header>
  );
};

export default Header;
