import axios from 'axios'

export type AlbumPhoto = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
  }

export const fetchAlbumPhotos = async () => {
    const uri = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    const {data} = await axios.get<Array<AlbumPhoto>>(uri);
    return data;
}