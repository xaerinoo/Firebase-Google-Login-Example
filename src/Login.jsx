import { useNavigate } from 'react-router-dom';
import Google from './Google';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getRedirectResult, onAuthStateChanged } from 'firebase/auth';
import Spinner from './Spinner';
import { auth } from './firebase';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/successed');
            } else {
                getRedirectResult(auth)
                    .then((result) => {
                        if (result && result.user) {
                            navigate('/successed');
                        } else {
                            setLoading(false);
                        }
                    })
                    .catch((error) => {
                        console.error('리디렉션 로그인 실패:', error); 
                        setLoading(false);
                    });
            }
        });
    }, [navigate]);

    if(loading) {
        return (
            <LoginWrapper>
                <Spinner />
            </LoginWrapper>
        );
    }

  return (
    <LoginWrapper>
        <GoogleButton>
            <Google className='google-component' />
        </GoogleButton>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GoogleButton = styled.div`
  width: 296px;
  cursor: pointer;

  .google-component {
    left: 26px;
  }
`;