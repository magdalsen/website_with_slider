import { About } from '../About/About';
import { Gallery } from '../Gallery/Gallery';
import { Start } from '../Start/Start';

export const routes = [
  {
    path: '/',
    name: 'Start',
    Component: Start,
  },
  {
    path: '/about',
    name: 'About',
    Component: About,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    Component: Gallery,
  }
];
