import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { routes } from './components/constants/routes'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
            {routes.map(({ path, Component }) => (
              <Route index path={path} key={path} element={<Component />} />
            ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
