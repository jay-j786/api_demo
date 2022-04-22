import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import {getPosts, setPosts} from './../../utils/services';
const initialState = {
  postList: [],
  postListLoading: false,
};

export const fetchPostData = createAsyncThunk(
  'posts/fetchPostData',
  async (providers, {rejectWithValue}) => {
    try {
      return await getPosts();
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);

// export const makePostData = createAsyncThunk(
//   'posts/makePostData',
//   async (providers, {rejectWithValue}) => {
//     try {
//       return await makePostData(body);
//     } catch (err) {
//       return rejectWithValue(err.response);
//     }
//   },
// );
export const makePostData = createAsyncThunk(
  'posts/makePostData',
  async (body, {rejectWithValue}) => {
    try {
      console.log(body);
      const response = await setPosts(body);
      // console.log('response:', response);
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  },
);
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      if (state.post.postList === null) {
        return undefined;
      } else {
        state.postList = [...state.postList, action.payload];
      }
    },
  },
  extraReducers: {
    [fetchPostData.fulfilled]: (state, action) => {
      // console.log(...state.postList);
      state.postList = action.payload?.data;
      state.postListLoading = false;
    },
    [fetchPostData.pending]: state => {
      state.postListLoading = true;
    },
    [fetchPostData.rejected]: state => {
      state.postListLoading = false;
    },
    [makePostData.fulfilled]: (state, action) => {
      const stateClone = current(state).postList;
      if (action.payload?.status === 201) {
        // console.log('Currentstate', stateClone);
        // console.log('actionState', action.payload.data);
        // console.log('state', current(state.postList));
        state.postList = [...stateClone, action.payload?.data];
      }
      state.postListLoading = false;
    },
    [makePostData.pending]: state => {
      state.postListLoading = true;
    },
    [makePostData.rejected]: state => {
      state.postListLoading = false;
    },
  },
});

export const postSelector = state => {
  return state.post;
};

export const lengthSelector = state => {
  return state.post.postList.length;
};
export default postSlice.reducer;
