import Logn from './logn.js';

import { useState } from 'react';

function App() {
  const [module, setModule] = useState(false);

  return <Logn module={module} setModule={setModule} />;
}

export default App;
