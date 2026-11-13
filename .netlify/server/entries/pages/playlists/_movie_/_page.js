import { e as error } from "../../../../chunks/index.js";
import { p as playlists, s as songs } from "../../../../chunks/music.js";
const prerender = true;
function entries() {
  return playlists.map((playlist) => ({ movie: String(playlist.id) }));
}
function load({ params }) {
  const playlist = playlists.find((item) => item.id === Number(params.movie));
  if (!playlist) {
    error(404, "Playlist not found");
  }
  return {
    playlist,
    songs: songs.filter((song) => song.playlistId === playlist.id)
  };
}
export {
  entries,
  load,
  prerender
};
