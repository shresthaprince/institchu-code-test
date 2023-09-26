import { Carousel } from 'react-responsive-carousel';

import type { AlbumPhoto } from "../../services/api";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCallback } from 'react';

interface PhotoCarouselI {
    photos: AlbumPhoto[];
}

const PhotoCarousel = ({ photos }: PhotoCarouselI) => {

    const renderThumbnails = useCallback(() => (
        photos.map(({ id, title, thumbnailUrl }) => <img key={id} alt={`${title}-thumbnail`} src={thumbnailUrl} />)
    ), [photos])

    return (
        <section className='flex flex-col flex-1 items-center'>
            <div className='w-full max-w-[600px]'>
                <Carousel className='max-h-fit max-w-fit' infiniteLoop transitionTime={500} showIndicators={false} renderThumbs={renderThumbnails}>
                    {
                        photos.map(({ id, url, title }) => (
                            <div key={id}>
                                <img alt={title} src={url} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>

        </section>
    )
}

export default PhotoCarousel