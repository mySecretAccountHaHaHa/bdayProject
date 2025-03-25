import './App.css'
import Home from './pages/Home';
import WrongTime from './pages/WrongTime';

function App() {
  const today = new Date();
  const display = today.getDate() == 19 && today.getMonth() == 2;

  return (
    <>
      {!display && <WrongTime />}
      {display && <Home />}
    </>
  )
}

export default App
