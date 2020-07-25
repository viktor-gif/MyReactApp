const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 56 },
    { id: 2, message: "It's my first post", likesCount: 76 },
    { id: 3, message: "It's my second post", likesCount: 45 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 24
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
          }
        case UPDATE_NEW_POST_TEXT: {
          let stateCopy = {...state};
          stateCopy.newPostText = action.newText;
            return stateCopy;
          }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return{
      type: ADD_POST
    }
  }
  export const updateNewPostChangeActionCreator = (text) => {
    return{
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export default profileReducer;