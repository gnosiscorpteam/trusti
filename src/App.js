import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './router';
import Splash from './pages/splash';

function App() {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <SnackbarProvider>
          {/* <Splash /> */}
          <AppRouter />
        </SnackbarProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
