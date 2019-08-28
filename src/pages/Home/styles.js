import styled from 'styled-components';

export const Container = styled.main`
  background: #ffffff;
  min-height: calc(100vh - 100px);
  position: relative;
`;

export const Crooked = styled.div`
  -webkit-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  -moz-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  background: #fff;

  @media (min-width: 992px) {
    transform: translate(-50%, 0) rotate(-5deg);
    width: 120vw;
    margin-top: -120px;
    position: relative;
    left: 50%;
  }
`;
