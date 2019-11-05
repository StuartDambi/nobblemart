import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
<<<<<<< HEAD
  ReactDOM.unmountComponentAtNode(div);
=======
>>>>>>> 5907d000c88cccae9cb38eae57f4ca0eef88ff18
});
