import { error } from '@sveltejs/kit';
import { playlists, songs } from '../../../data/music.js';

export const prerender = true;

export function entries() {
	return playlists.map((playlist) => ({ movie: String(playlist.id) }));
}

export function load({ params }) {
	const playlist = playlists.find((item) => item.id === Number(params.movie));

	if (!playlist) {
		error(404, 'Playlist not found');
	}

	return {
		playlist,
		songs: songs.filter((song) => song.playlistId === playlist.id)
	};
}
