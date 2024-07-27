import { useEffect } from 'react';
import './Support.css';
import { useNavigate } from 'react-router-dom';
import { Tabbar } from '../../components/Tabbar';

export const Support = () => {
  const navigate = useNavigate();

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
  return (<div>
    <Tabbar />
  </div>);
};

