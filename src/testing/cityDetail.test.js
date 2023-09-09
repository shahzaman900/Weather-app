import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import CityDetail from '../component/cityDetail';

test('Check if Missions component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CityDetail />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
