import React from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './components/LandingPage'
import './index.css'

function App() {
  const [route, setRoute] = React.useState(window.location.hash || '')

  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // No separate Menu page — always render the LandingPage
  return <LandingPage />
}

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export default App
