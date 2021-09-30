// Action creador
export const selectSong = (song) => {
  // retornamos un action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
