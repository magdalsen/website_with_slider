import { HashLink } from 'react-router-hash-link';

import LOGO_Placeholder from '../../assets/LOGO_Placeholder.svg';

import '../../styles/_mobile.scss';

export const Logo = () => (
    <>
      <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to={'/#top'}>
        <img src={LOGO_Placeholder} alt='Logo' id='logo' />
      </HashLink>
    </>
  );
