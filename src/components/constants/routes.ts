import { Start } from '../Start/Start'
import { About } from '../About/About'
import { Gallery } from '../Gallery/Gallery'
import { Contact } from '../Contact/Contact'


export const routes = [
    {
      path: "/",
      name: "Start",
      Component: Start
    },
    {
      path: "/about",
      name: "About",
      Component: About
    },
    {
      path: "/gallery",
      name: "Gallery",
      Component: Gallery
    },
    {
      path: "/contact",
      name: "Contact",
      Component: Contact
    }
  ];