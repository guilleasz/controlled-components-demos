import React from 'react';
import { render } from 'react-dom';
import FormContainer from './containers/FormContainer';

const App = () => <FormContainer />;

render(<App />, document.getElementById('app'));
