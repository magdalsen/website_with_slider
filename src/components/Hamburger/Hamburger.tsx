import { HashLink } from 'react-router-hash-link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Button,IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';

import { ContactForm } from '../ContactForm/ContactForm';

import style from './Hamburger.module.scss';

export const Hamburger = (links: { name: string; link: string }[]) => (
    <Menu>
      <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
      <MenuList>
        <div>
          <ul className={style.hamburgerMenu}>
            <li>
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                to={`${links[0].link}`}
                key={links[0].name}
              >
                <Button size='sm'>{links[0].name}</Button>
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                to={`${links[1].link}`}
                key={links[1].name}
              >
                <Button size='sm'>{links[1].name}</Button>
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                to={`${links[2].link}`}
                key={links[2].name}
              >
                <Button size='sm'>{links[2].name}</Button>
              </HashLink>
            </li>

            <li>
              <ContactForm />
            </li>
          </ul>
        </div>
      </MenuList>
    </Menu>
  );
