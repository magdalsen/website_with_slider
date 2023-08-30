import { CarouselProvider, Slider, Slide, DotGroup, Image, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './Gallery.module.scss';
import './Gallery.module.scss';
import { slides } from '../constants/constants';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Gallery = () => {
    return (
        <>
            <section id="gallery">
                <div className={style.galleryHeader}>
                    <h2>GALERIA</h2>
                </div>

                <div className={style.gallerySlider}>
                    <CarouselProvider
                        naturalSlideWidth={1364}
                        naturalSlideHeight={767}
                        totalSlides={4}
                    >
                        <div id={style.gallerySliderBox}>
                            <ButtonBack><ChevronLeftIcon width={'3em'} height={'12em'} /></ButtonBack>
                            <Slider className={style.gallerySliderSlides}>
                                <Slide index={0}><Image src="./images/image1.png" hasMasterSpinner={true} alt="image" /></Slide>
                                <Slide index={1}><Image src="./images/image2.png" hasMasterSpinner={true} alt="image" /></Slide>
                                <Slide index={2}><Image src="./images/image3.png" hasMasterSpinner={true} alt="image" /></Slide>
                                <Slide index={3}><Image src="./images/image4.png" hasMasterSpinner={true} alt="image" /></Slide>
                            </Slider>
                            <ButtonNext><ChevronRightIcon width={'3em'} height={'12em'} /></ButtonNext>
                        </div>
                        <DotGroup
                            className={style.dotActive}
                            renderDots={(props) => {
                                return <>
                                    {slides.map((el) => (
                                        <Dot slide={el.number} style={{backgroundColor: props.currentSlide === el.number ? "#FF4359" : "#AFAFAF"}}></Dot>
                                    ))}
                                </>
                            }}
                        ></DotGroup>
                    </CarouselProvider>
                </div>
            </section>
        </>
    )
}