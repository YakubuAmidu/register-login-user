import { StatusBar } from 'expo-status-bar';

// import Login
import RootStack from './Navigators/RootStack';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootStack />
    </>
  );
}

