import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        topFriends: state.topFriends
    }
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;