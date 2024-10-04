import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  mobile: string;
  address: string;
  playingPosition: string;
  image: null | File | string;
}

const playerSlice = createSlice({
  name: "player",
  initialState: [] as PlayerState[] | null,
  reducers: {
    setPlayer: (_, action) => {
      // add existing players to the new player
      return action.payload;
    },
  },
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;
