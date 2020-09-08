import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 56 },
    { id: 2, message: "It's my first post", likesCount: 76 },
    { id: 3, message: "It's my second post", likesCount: 45 },
  ],
  newPostText: "",
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 24
            };
            return {
              ...state,
              posts: [newPost, ...state.posts],
              newPostText: ''
            };
          
            
          
        case UPDATE_NEW_POST_TEXT: 
          return {
            ...state,
            newPostText: action.newText
          };
          case SET_STATUS: 
          return {
            ...state,
            status: action.status
          };
          case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.profile
          };
          
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
  export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
  export const setStatus = (status) => ({type: SET_STATUS, status})

  //thunks
  
  export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
  }
  export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      // debugger;
            dispatch(setStatus(response.data));
        });
  }
  export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
          if (response.data.rsultCode === 0) {
            dispatch(setStatus(status));
          }
        });
  }


  export const updateNewPostChangeActionCreator = (text) => {
    return{
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export default profileReducer;