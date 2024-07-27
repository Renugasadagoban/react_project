import { useEffect, useState } from 'react';
import './Query-Card.css';
import { useNavigate } from 'react-router-dom';
import { Query } from '../../utils/query';

const Card = () => {
  const [errors, setError] = useState('');
  const [email, setEmail] = useState('');
  const [queryTitle, setQueryTitle] = useState('');
  const [queryDesc, setQueryDesc] = useState('');
  const [loginId, setLoginId] = useState();
  const [errorQueryTitle, setQueryTitleError] = useState('');
  const [errorQueryDesc, setQueryDescError] = useState('');

  useEffect(() => {
    try {
      const loginData = JSON.parse(localStorage.getItem('login') ?? '');
      setLoginId(loginData.email);
      if (loginData.isLoggedIn === false) {
        navigate('/');
      }
    } catch (error) {
      navigate('/');
    }
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let error = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError('');
    setQueryTitleError('');
    setQueryDescError('');
    if (email.length <= 0) {
      error = 'Email is required';
      setError(error);
    } else if (!emailRegex.test(email)) {
      error = 'Invalid email address';
      setError(error);
    } else if (queryTitle.length <= 0) {
      error = 'Query Title should not be empty';
      setQueryTitleError(error);
    } else if (queryDesc.length <= 0) {
      error = 'Query Desc should not be empty';
      setQueryDescError(error);
    }

    if (error.length === 0 && (errorQueryTitle.length === 0 && errorQueryDesc.length === 0)) {
      const query: Query = { email, queryTitle, queryDesc, loginId };
      const storedData = JSON.parse(localStorage.getItem('queryData') ?? '[]');
      const updatedQueryData = [...storedData, query];
      localStorage.setItem('queryData', JSON.stringify(updatedQueryData));
      navigate('/support');
    }
  }

  return (

    <div className="form-container">
      <h2 style={{ textAlign: 'center' }}> Ask a Query</h2>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <div className="form-group" >
          <label className='label'>Email ID:</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
          {errors.length > 0 && <span className='errorLabel'>{errors}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="queryTitle" className='label'>Query Title:</label>
          <input type="text" id="queryTitle" name="queryTitle"
            onChange={(e) => setQueryTitle(e.target.value)}
            required />
          {errorQueryTitle.length > 0 && <span className='errorLabel'>{errorQueryTitle}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="desc" className='label'>Description:</label>
          <textarea id="desc" name="desc" onChange={(e) => setQueryDesc(e.target.value)} required />
          {errorQueryDesc.length > 0 && <span className='errorLabel'>{errorQueryDesc}</span>}

        </div>
        <button type="submit" style={{ color: 'white', backgroundColor: 'brown' }}>Submit</button>
      </form>
    </div>
  );
};

export default Card;
