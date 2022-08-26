import { Home } from 'pages';

import { globalStyles } from 'styles';

function App() {
  globalStyles();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
