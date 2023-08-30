import style from './Navgation.module.scss'
import { Button } from "@chakra-ui/react"
import { Logo } from "../Logo/Logo"
import { HashLink } from 'react-router-hash-link'
import { ContactForm } from '../ContactForm/ContactForm'
import { useEffect, useState } from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import { WIDTH_TO_DISPLAY_HAMBURGER, links, social } from '../constants/constants'

export const Navigation = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
      
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        {windowSize[0] <= WIDTH_TO_DISPLAY_HAMBURGER ? <><Hamburger {...links} /></> : 
                            <>
                                {links.map((elem) => (
                                <HashLink
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                                    to={`${elem.link}`}
                                    key={elem.name}>
                                    <Button variant="solid" size="sm">{elem.name}</Button>
                                </HashLink>
                            ))}
                            <li>
                                <ContactForm />
                            </li>
                            </>
                        }
                    </ul>
                    <div className={style.social}>
                        {social.map((el) => (
                            <div key={el.alt}>
                                <img src={el.src} alt={el.alt} />
                            </div>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    )
}