import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import CityDetail from '../component/cityDetail';

test('Simulate user interaction', () => {
  const detail = render(
    <Provider store={store}>
      <CityDetail />
    </Provider>,
  );
  expect(detail).toMatchSnapshot();
});
