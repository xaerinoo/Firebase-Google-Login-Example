import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <SpinnerWrapper>
        <Loader />
    </SpinnerWrapper>
  );
};

export default Spinner;

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 64px;
  height: 64px;
  border: 5px solid #333;
  border-top: 5px solid #fff;
  border-radius: 50%;
  animation: ${spin} 0.5s linear infinite;
`;