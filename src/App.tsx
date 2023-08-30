import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Start } from './components/Start/Start'
import { About } from './components/About/About'
import { Gallery } from './components/Gallery/Gallery'
import { Contact } from './components/Contact/Contact'
import { Navigation } from './components/Navigation/Navigation'

function App() {
  const routes = [
    {
      path: "/",
      name: "Start",
      Component: Start
    },
    {
      path: "/omnie",
      name: "About",
      Component: About
    },
    {
      path: "/galeria",
      name: "Gallery",
      Component: Gallery
    },
    {
      path: "/kontakt",
      name: "Contact",
      Component: Contact
    }
  ];

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
