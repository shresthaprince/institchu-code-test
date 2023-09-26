import { useQuery } from "@tanstack/react-query"
import { fetchAlbumPhotos } from "../../services/api"
import PhotoCarousel from "./PhotoCarousel"

const PhotoAlbumMain = () => {
    // Fetch photos
    const {data, isInitialLoading, isError, refetch} = useQuery({queryKey: ['photos'], queryFn: fetchAlbumPhotos})

    if (isError) {
        return (
            <section>
                <h2>Something went wrong...</h2>
                <button onClick={() => refetch()}>Retry</button>
            </section>
        )
    }

    if (isInitialLoading) {
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    if (!data || data.length === 0) {
        return (
            <section>
                <h2>No photos found.</h2>
            </section>
        )
    }

    return (
        <PhotoCarousel photos={data} />
    )
}

const PhotoAlbum = () => {
    return (
        <>
            <h1>Photo Album Task</h1>
            <PhotoAlbumMain />
        </>
    )
}



export default PhotoAlbum