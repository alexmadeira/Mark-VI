import styled, { keyframes } from 'styled-components';

const entrada = keyframes`
  0% { top: 200px; opacity: 0; }
  40% { top: 200px; }
  50% { opacity: 0; }
  100% { top: 0px; opacity: 1; }
`;

export const Container = styled.div`
  overflow: hidden;
  border: 1px solid #000;
  flex: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  max-width: 100%;
  transition: all 0.2s;
  background-size: cover;
  opacity: 1;
  animation: ${entrada} ${props => (props.item ? 1 + props.item / 5 : 1)}s;
  background: ${props => (props.bgcolor ? `url(${props.bgcolor})` : '#FFFFFF')};

  &::after {
    content: '';
    background-image: url(${props => props.bgimage});
    visibility: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: all 0.2s;
    z-index: 0;
  }

  &:nth-child(9n + 1) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 2) {
    width: calc(50% - 30px);
  }
  &:nth-child(9n + 3) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 4) {
    width: calc(50% - 30px);
  }
  &:nth-child(9n + 5) {
    width: calc(31.25% - 30px);
  }
  &:nth-child(9n + 6) {
    width: calc(18.75% - 30px);
  }
  &:nth-child(9n + 7) {
    width: calc(31.25% - 30px);
  }
  &:nth-child(9n + 8) {
    width: calc(25% - 30px);
  }
  &:nth-child(9n + 9) {
    width: calc(36% - 30px);
  }
  @media (max-width: 960px) {
    width: calc(100% - 30px) !important;
  }
  &.open {
    width: calc(100% - 30px) !important;
    height: 95vh;
    flex: initial;
    &::after {
      visibility: visible;
    }
  }
  img {
    max-width: initial !important;
  }
  &.simple {
    @media (min-width: 992px) {
      &:nth-child(9n + 4),
      &:nth-child(9n + 1) {
        .DescriptionBox {
          left: initial;
          right: -10px;
        }
      }
    }
  }
`;
export const TitleBox = styled.div`
  z-index: 3;
  position: absolute;
  right: -5px;
  top: -20px;
  min-width: 200px;
  &.open {
    opacity: 0;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 100px;
  z-index: 3;
  transition: all 1s;
  transform: rotate(-25deg);
  left: 0px;
  & > a {
    position: relative;
  }
  &.open {
    transform: translate(-50%, -50%) !important;
    left: 50%;
  }
  img {
    filter: drop-shadow(0px 0px 0px #000000);
    transition: all 0.5s;
    width: 100%;
    min-height: initial;
    max-height: initial;
    position: relative;
  }

  @media (max-width: 960px) {
    transform: translate(-50%, -50%) rotate(0deg);
    left: 50%;
    top: 50%;
    width: 40%;
  }
  @media (max-width: 460px) {
    width: 85%;
  }
`;
