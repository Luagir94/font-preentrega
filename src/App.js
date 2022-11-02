import './App.css';
import Routing from './routing';
import { AuthProvider } from './context/authContext';
function App() {
  return (
    <AuthProvider>

            <Routing />

    </AuthProvider>
  );
}

export default App;
