import React from 'react';
import './App.css';

import Routes from './routes';

const App = () => <Routes />;

/* funciona igual
function App () {
    return <Main />;
} ==
class App extends Component {
  render() {
    return <Main />;//chama a estrutura q esta na pasta Main
  }
}*/

export default App;
