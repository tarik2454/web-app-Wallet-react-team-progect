import React, { useEffect, useState } from 'react';
import {
  CurrencyContainerStyled,
  CurrencyImgStyled,
  EllipseImgStyled,
  EllipseImgStyled2,
  LineImgStyled,
  TableCurrencyStyled,
  TbodyCurrencyStyled,
  TdCurrencyStyled,
  ThCurrencyStyled,
  TheadCurrencyStyled,
  TrCurrencyStyled,
  EuroImgStyled,
  WaveImgStyled,
  UsdImgStyled,
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from 'redux/Currency/operations';
import {
  selectCurrency,
  selectCurrencyLoading,
  selectEuroBuy,
  selectUsdBuy,
} from '../../redux/Currency/selectors';
import { SpriteSVG } from 'pictures/SpriteSVG';

export const Currency = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectCurrencyLoading);
  const [cachedData, setCachedData] = useState(null);
  const lastRequest = localStorage.getItem('lastCurrencyRequest');

  // useEffect(() => {
  //   if (lastRequest) {
  //     const lastRequestDate = new Date(lastRequest);
  //     const currentTime = new Date();
  //     const timeDiff = currentTime - lastRequestDate;

  //     if (timeDiff < 3600000) {
  //       const cachedData = JSON.parse(
  //         localStorage.getItem('cachedCurrencyData')
  //       );
  //       setCachedData(cachedData);
  //     } else {
  //       dispatch(fetchCurrencyData());
  //     }
  //   }
  // }, [dispatch, lastRequest]);

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  const usdBuy = useSelector(selectUsdBuy);
  const euroBuy = useSelector(selectEuroBuy);

  return (
    <CurrencyContainerStyled>
      <TableCurrencyStyled>
        <TheadCurrencyStyled>
          <TrCurrencyStyled>
            <ThCurrencyStyled>Currency</ThCurrencyStyled>
            <ThCurrencyStyled>Purchase</ThCurrencyStyled>
            <ThCurrencyStyled>Sale</ThCurrencyStyled>
          </TrCurrencyStyled>
        </TheadCurrencyStyled>
        <TbodyCurrencyStyled>
          {isLoading ? (
            <tr>
              <TdCurrencyStyled>Loading...</TdCurrencyStyled>
            </tr>
          ) : (
            currencyData.map((data, index) => (
              <tr key={index}>
                <TdCurrencyStyled>{data.currency}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.buy}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.sell}</TdCurrencyStyled>
              </tr>
            ))
          )}
        </TbodyCurrencyStyled>
      </TableCurrencyStyled>
      <CurrencyImgStyled>
        <EllipseImgStyled>
          <EuroImgStyled>{euroBuy}</EuroImgStyled>
          <SpriteSVG name={'currencyEllipse'} />
        </EllipseImgStyled>
        <EllipseImgStyled2>
          <UsdImgStyled>{usdBuy}</UsdImgStyled>
          <SpriteSVG name={'currencyEllipse'} />
        </EllipseImgStyled2>
        <LineImgStyled>
          <SpriteSVG name={'currencyLine'} />
        </LineImgStyled>
        <WaveImgStyled>
          <SpriteSVG name={'currencyWave'} />
        </WaveImgStyled>
      </CurrencyImgStyled>
    </CurrencyContainerStyled>
  );
};
