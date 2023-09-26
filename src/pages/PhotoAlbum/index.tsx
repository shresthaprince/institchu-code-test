import { useQuery } from "@tanstack/react-query"
import { fetchAlbumPhotos } from "../../services/api"
import PhotoCarousel from "./PhotoCarousel"
import { AppHeader } from "../../components/common/AppText"

const PhotoAlbumMain = () => {
    // Fetch photos
    const {data, isInitialLoading, isError, refetch} = useQuery({queryKey: ['photos'], queryFn: fetchAlbumPhotos})

    if (isError) {
        const handleRetry = () => refetch()
        return (
            <section className="flex flex-col gap-2 items-start">
                <h2 className="font-monsterrat font-bold">Something went wrong...</h2>
                <button className="px-3 py-2 bg-accent-primary text-white rounded-md" onClick={handleRetry}>Retry</button>
            </section>
        )
    }

    if (isInitialLoading) {
        return (
            <section>
                <h2 className="font-monsterrat font-bold">Loading...</h2>
            </section>
        )
    }

    if (!data || data.length === 0) {
        return (
            <section>
                <h2 className="font-monsterrat font-bold">No photos found.</h2>
            </section>
        )
    }

    return (
        <PhotoCarousel photos={data} />
    )
}

const PhotoAlbum = () => {
    return (
        <div className="flex flex-auto flex-col gap-4">
            <AppHeader>Photo Album Task</AppHeader>
            <PhotoAlbumMain />
        </div>
    )
}



export default PhotoAlbum