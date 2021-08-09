import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';
import { addPostActiveCreator } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (values) => {
    dispatch(addPostActiveCreator(values));
  },
});

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export { MyPostContainer };
