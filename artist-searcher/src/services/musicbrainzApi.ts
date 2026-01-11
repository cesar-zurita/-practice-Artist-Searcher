import type { Artist } from '../types/Artists'

let url: string = 'https://musicbrainz.org/ws/2/artist/?query=';

interface ArtistSearchResponse {
  artists: Artist[]
}

console.log('hOLA!!!0');

export async function fetchTry(): Promise< {artists: Artist[]} >{

    try{
        const response = await fetch('https://musicbrainz.org/ws/2/artist/?query=coldplay&fmt=json');
        if(!response.ok){
            throw new Error('Could not fetch resource');
        }
        const data: ArtistSearchResponse = await response.json();

        return data
    }catch(error){
        console.log('error fetching the data');
        throw error;
    }
}

fetchTry();

