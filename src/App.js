import logo from './logo.svg';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import Routing from './routing';
import { AuthProvider } from './context/authContext';
function App() {
  return (
    <AuthProvider>
      <MantineProvider>
        <ModalsProvider>
          <NotificationsProvider>
            <Routing />
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </AuthProvider>
  );
}

export default App;
