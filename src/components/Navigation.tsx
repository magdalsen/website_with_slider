import style from './Navgation.module.scss'
import { Button } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { HashLink } from 'react-router-hash-link'

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
        },
        {
            name: 'KONTAKT',
            link: '/#kontakt'
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
                                to={`${elem.link}`}>
                                <Button variant="solid" size="sm">{elem.name}</Button>
                            </HashLink>
                        ))}
                    </ul>
                    <div className={style.social}>
                        {social.map((el) => (
                            <div>
                                <img src={el.src} alt={el.alt} />
                            </div>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    )
}