import style from './Navgation.module.scss'
import { Button } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { HashLink } from 'react-router-hash-link'
import { ContactForm } from './ContactForm'

export const Navigation = () => {
    const links = [
        {
            name: 'START',
            link: '/#top'
        },
        {
            name: 'O MNIE',
            link: '/#omnie'
        },
        {
            name: 'GALERIA',
            link: '/#galeria'
        }
    ];

    const social = [
        {
            src: "../../images/facebook.svg",
            alt: "facebook_img"
        },
        {
            src: "../../images/instagram.svg",
            alt: "instagram_img"
        },
        {
            src: "../../images/youtube.svg",
            alt: "youtube_img"
        }
    ]
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Logo />
                        </li>
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