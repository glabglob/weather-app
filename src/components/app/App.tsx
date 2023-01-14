import AppLogo from '../logo/Logo';
import MainSection from '../main/Main';
import Sidebar from '../sidebar/Sibebar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AppLogo />
        <MainSection />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
