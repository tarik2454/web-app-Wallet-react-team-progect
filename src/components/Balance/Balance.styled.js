import styled from 'styled-components';

export const BalanceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BalanceBoxStyled = styled.div`
  width: 480px;
  height: 80px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 56px;

  @media screen and (max-width: 767px) {
    width: 280px;
    background-color: #523b7e99;
    border-radius: 8px;
    background: rgba(82, 59, 126, 0.6);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    padding-left: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(82, 59, 126, 0.6);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  }
`;
export const BalanceTitleStyled = styled.h2`
  color: var(--white-40, rgba(255, 255, 255, 0.4));
  font-family: Poppins-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
export const BalanceStyled = styled.span`
  color: var(--white, #fbfbfb);
  font-family: Poppins-Bold;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
