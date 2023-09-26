import axios from 'axios'

import type { AddUserFormData } from '../pages/AddUser/AddUserForm';

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

export const addUser = async (data: AddUserFormData) => {
  const uri = 'https://jsonplaceholder.typicode.com/users';
  const {data: dataRes} = await axios.post<AddUserFormData & {id: string}>(uri, data);
  return dataRes;
}