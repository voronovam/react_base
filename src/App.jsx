import './App.css'
import { CryptoContextProvider } from "./context/crypto-context.jsx";
import AppLayout from "./components/layout/AppLayout.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage.jsx';

export default function App() {
  return (
    <CryptoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </CryptoContextProvider>
  );
}
