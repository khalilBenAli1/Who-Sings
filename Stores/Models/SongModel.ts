import { Instance, types } from "mobx-state-tree";

export const SongModel = types.model("SongModel", {
  track_id: types.identifier,
  track_name: types.string,
  artist_name: types.string,
  lyrics: types.array(types.string),
});

export interface SongModel extends Instance<typeof SongModel> {}
