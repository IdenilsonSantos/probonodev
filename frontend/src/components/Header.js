import { Container, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../services/auth';
import './styles.css'


function Header() {
  return <>
  <NavbarBrand className='navbar'>
     <Container className='navbar-ctnr'>
      {!isAuthenticated ? <><Link  className='navbar-link' to={'/login'}>Login</Link>
      <Link  className='navbar-link' to={'/register'}>Registrar</Link></> : ''}
      {isAuthenticated ? <>
      <Link  className='navbar-link' to={'/'}>Search More</Link>
      <Link  className='navbar-link' to={'/activities/last'}>See last activities</Link>
      </> : ''}
     </Container>
</NavbarBrand>
  </>;
}

export default Header;