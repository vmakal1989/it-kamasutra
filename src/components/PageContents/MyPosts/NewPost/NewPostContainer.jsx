import {addNewPost} from "../../../../Redux/pageContentsReducers/posts-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.pageContents.newPostText
    }
};


export default compose(connect(mapStateToProps,{addNewPost})(NewPost));
