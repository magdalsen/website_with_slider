import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './Gallery.module.scss';
import { useEffect } from 'react';

export const Gallery = () => {
    const slider = document.getElementById('mySlider');

    useEffect(() => {
        if (slider) {
            slider.focus();
          }
        },[])

    return (
        <>
            <section id="galeria">
                <div className={style.galeriaHeader}>
                    <h2>GALERIA</h2>
                </div>

                <div className={style.galeriaSlider}>
                    <CarouselProvider
                        naturalSlideWidth={1364}
                        naturalSlideHeight={767}
                        totalSlides={4}
                    >
                        <Slider id="mySlider">
                            <Slide index={0}><Image src="./images/image1.png" hasMasterSpinner={true} alt="image" /></Slide>
                            <Slide index={1}><Image src="./images/image2.png" hasMasterSpinner={true} alt="image" /></Slide>
                            <Slide index={2}><Image src="./images/image3.png" hasMasterSpinner={true} alt="image" /></Slide>
                            <Slide index={3}><Image src="./images/image4.png" hasMasterSpinner={true} alt="image" /></Slide>
                        </Slider>
                        <DotGroup showAsSelectedForCurrentSlideOnly={true} className={style.dotActive}></DotGroup>
                    </CarouselProvider>
                </div>
            </section>
        </>
    )
}