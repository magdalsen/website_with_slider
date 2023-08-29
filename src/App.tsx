import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Start } from './components/Start'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Navigation } from './components/Navigation'

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
