import './App.css';
import MainPage from './components/MainPage';
import InfoSelectedContact from './components/InfoSelectedContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      '
      <BrowserRouter>
        <Routes>
          <Route
            path="/selectedContact"
            element={<InfoSelectedContact />}
          ></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
