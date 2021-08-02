import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';
import { addPostActiveCreator, onPostChangeActiveCreator } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPost: () => {
    dispatch(addPostActiveCreator());
  },
  changeOnPostText: (text) => {
    dispatch(onPostChangeActiveCreator(text));
  },
});

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export { MyPostContainer };
