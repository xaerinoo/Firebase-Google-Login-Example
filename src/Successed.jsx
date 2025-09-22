import styled from 'styled-components';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

const Successed = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 완료:', auth.currentUser);
      // navigate는 여기서 호출하지 않고 상태에 맡김
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <Container>
      <h2>Login Successed! 👏🏻</h2>
      <p>{auth.currentUser.email}</p>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Container>
  );
};

export default Successed;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Roboto", Helvetica;

  & > h2 {
    color: #1A80EA;
    margin: 0;
  }

  & > p {
    color: #333;
    margin: 0;
  }
`;

const LogoutButton = styled.span`
  font-size: 14px;
  color: #666;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #DA2538;
  }
`;