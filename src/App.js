import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/ContextProvider';

function App() {
  return (
    <AuthContextProvider>

      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          <Route path='/profile'>
            <UserProfile />
          </Route>
        </Switch>
        <ToastContainer />
      </Layout>

    </AuthContextProvider>
  );
}

export default App;
