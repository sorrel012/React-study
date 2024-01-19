import Header from './components/Header.jsx';
import { Fragment } from 'react';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
