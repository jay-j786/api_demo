import {createSlice} from '@reduxjs/toolkit';

let DATA = [];
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: DATA,
  },
  reducers: {
    addContact: (state, action) => {
      //   console.log(action.payload.data);
      if (action.payload.data === null) {
        return undefined;
        //   } else if (action.payload.type === 'localStorage') {
        //     state.contacts = [...state.contacts, ...action.payload.data];
        //   } else if (action.payload.type === 'import') {
        //     state.contacts = [...state.contacts, ...action.payload.data];
      } else {
        state.posts = [...state.posts, action.payload];
      }
    },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     element => element.userId !== action.payload,
    //   );
    // },
    // updateContact: (state, action) => {
    //   state.contacts = state.contacts.map(el =>
    //     el.userId === action.payload.id ? action.payload.data : el,
    //   );
    // },
  },
});

export const {addPosts} = postSlice.actions;
export default postSlice.reducer;
