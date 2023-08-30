import { About } from "../About/About"
import { Gallery } from "../Gallery/Gallery"
import style from './Start.module.scss'

export const Start = () => {
    return (
        <>
            <section id="start">
                <img src="./images/main-photo.png" alt="main_photo" className={style.mainPhoto} />
            </section>

            <About />
            <Gallery />
        </>
    )
}