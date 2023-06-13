import { createSlice } from '@reduxjs/toolkit';
import { documentDirectory, copyAsync } from 'expo-file-system';

import Boulder from '../model/boulder';

const initialState = {
  boulders: [],
};

const boulderSlice = createSlice({
  name: 'boulder',
  initialState,
  reducers: {
    addBoulder: (state, action) => {
      const newBoulder = new Boulder(Date.now(), action.payload.title, action.payload.image);
      state.boulders.push(newBoulder);
    },
  },
});

export const { addBoulder } = boulderSlice.actions;

export const saveBoulder = ({ title, image }) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = `${documentDirectory}${fileName}`;
    //   try {
    //     await copyAsync({
    //  from: image,
    //  to: newPath,
    //});
    //} catch (error) {
    //    console.error(error);
    //  }

    dispatch(addBoulder({ title, image }));
  };
};

export default boulderSlice.reducer;
