import Board from './components/Board/Board';
import { reducer } from './reducer/reducer'
import { useReducer } from 'react'
import { initGameState } from './constants';
import AppContext from './contexts/Context'
import Control from './components/Control/Control';
import MovesList from './components/Control/bits/MovesList';

function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch
  }

  return (
    <AppContext.Provider value={providerState} >
      <div className="App max-h-screen">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
