import { supportButton, loginButton } from '../../utils/const'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GridContainer from '../../components/Calculater-Card/Calculater-Card';
import './Home.css'


const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/support');
  }
  const loginNavigation = () => {
    localStorage.setItem('login', JSON.stringify({ 'email': '', 'password': '', 'isLoggedIn': false }));
    navigate('/')
  }

  useEffect(() => {
    try {
      const loginData = JSON.parse(localStorage.getItem('login') ?? '');
      if (loginData.isLoggedIn === false) {
        navigate('/');
      }
    } catch (error) {
      navigate('/');
    }
  }, []);


  return (
    <div className='home-container'>
      <div className="top-container">
        <div className="home-header-buttons">
          <button className='homeButtons' onClick={handleClick}>{supportButton}</button>
          <button className='homeButtons' onClick={loginNavigation}>{loginButton}</button>
        </div>
      </div>
      <div className='grid-container'>
        <GridContainer />
      </div>
    </div>
  );
};

export default Home;
