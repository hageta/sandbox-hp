/* tslint:disable-next-line */
import * as React from 'react'
import { render } from 'react-dom'

import { sum } from '../../src/foo';
import App from './components/App'

render(
  <App message="World" />,
  document.getElementById('root'),
)
console.log(sum(1,2).toString());
