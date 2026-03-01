import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
        <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
