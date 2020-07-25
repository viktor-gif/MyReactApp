import React from "react";
import Friends from "./Friends";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";


// const FriendsContainer = (props) => {
  
//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState();
//       return <Friends friends={state.sidebar.friends} />
//     }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return{
    friends: state.sidebar.friends
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return{
//     updateNewPostText: (text) => {
//       let action = updateNewPostChangeActionCreator(text);
//       dispatch(action);
//     },
//     sendMessage: () => {
//       dispatch(addPostActionCreator());
//     }
//   }
// }

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
