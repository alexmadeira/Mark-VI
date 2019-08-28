import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Preload = styled.img`
  position: absolute;
  left: -2%;
  top: -2%;
  width: 104%;
  filter: blur(5px);
  opacity: 1;
  transition: all 2s;
  &.hidden {
    opacity: 0;
  }
`;

export const Content = styled.img`
  width: 100%;
`;
