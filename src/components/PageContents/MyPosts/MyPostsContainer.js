import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return  {
        posts: state.pageContents.posts
    }
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;