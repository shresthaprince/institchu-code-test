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
        <section>
            <h2>Photo Carousel</h2>
            <Carousel infiniteLoop transitionTime={500} renderThumbs={renderThumbnails}>
                {
                    photos.map(({ id, url, title }) => (
                        <div key={id}>
                            <img alt={title} src={url} />
                            <p className="legend">{title}</p>
                        </div>
                    ))
                }
            </Carousel>
        </section>
    )
}

export default PhotoCarousel