import { signInWithRedirect } from 'firebase/auth';
import styled from 'styled-components';
import { auth, provider } from './firebase';

const Google = ({
  className,
  frameClassName,
  googleLogo = "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw",
  text = "Sign In with Google",
}) => {

  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("로그인 실패");
    }
  }

  return (
    <SignInwithGoogle className={className} onClick={handleLogin}>
        <div className={`frame ${frameClassName}`}>
          <img className='google-logo' alt='Google logo' src={googleLogo} />
          <div className='text-wrapper'>{text}</div>
        </div>
    </SignInwithGoogle>
  );
}

export default Google;

const SignInwithGoogle = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 3px #0000002b, 0px 0px 3px #00000015;
  width: 296px;
  height: 54px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #EBEBEA;
  }

  & .frame {
    display: flex;
    align-items: flex-start;
    background: transparent;
    border-radius: 10px;
    gap: 15px;
  }

  & .google-logo {
    height: 24px;
    position: relative;
    width: 24px;
  }

  & .text-wrapper {
    color: #0000008a;
    font-family: "Roboto", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;