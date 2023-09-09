import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import CityDetail from '../component/cityDetail';

describe('testing country detail', () => {
  it('should render correct country name ', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CityDetail />
        </BrowserRouter>
      </Provider>,
    );
    const countryCard = screen.findByText('weather');
    expect(countryCard).toMatchSnapshot();
  });
});
