import LOGO_Placeholder from '../assets/LOGO_Placeholder.svg'
import '../styles/_mobile.scss'
import { HashLink } from 'react-router-hash-link'

export const Logo = () => {
    return (
        <>
            <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                to={'/#top'}>
                    <img src={LOGO_Placeholder} alt="Logo" id='logo' />
            </HashLink>
        </>
    )
}