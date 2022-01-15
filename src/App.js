import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainGamePage from './pages/MainGamePage.js'
// import 'assets/style/main.scss
import ScoreBoard from './pages/ScoreBoard.js';
import {connect} from 'react-redux'

function _App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainGamePage/>} />
          <Route exact path="/ScoreBoard" element={<ScoreBoard/>}></Route>
        </Routes>  

      </div>
    </Router>
  );
}

export const App = connect()(_App)
