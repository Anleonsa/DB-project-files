import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/general/Home/Home.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App