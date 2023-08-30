import { HashLink } from 'react-router-hash-link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Button,IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';

import { links } from '../constants/constants';
import { ContactForm } from '../ContactForm/ContactForm';

import style from './Hamburger.module.scss';

export const Hamburger = () => (
    <Menu>
      <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
      <MenuList>
        <div>
          <ul className={style.hamburgerMenu}>
            {links.map((elem) => (
                <li key={elem.name}>
                  <HashLink
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to={`${elem.link}`}
                    key={elem.name}
                  >
                    <Button size='sm'>{elem.name}</Button>
                  </HashLink>
                </li>
            ))}
            <li>
              <ContactForm />
            </li>
          </ul>
        </div>
      </MenuList>
    </Menu>
  );
