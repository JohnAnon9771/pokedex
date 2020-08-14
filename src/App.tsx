import React, { useState } from 'react';

import Home from './Pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [offset, setOffset] = useState(0);

  return (
    <>
      <Home {...{ offset, setOffset }} />
      <div style={{ display: 'none' }}>
        <Home offset={offset + 1} {...{ setOffset }} />
      </div>
      <GlobalStyle />
    </>
  );
};

export default App;
