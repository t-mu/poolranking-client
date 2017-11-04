import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import AddPlayer from "../components/AddPlayer/AddPlayer";


function mapStateToProps(state: any)
{
    return {
        players: state.players
    }
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        createPlayer: (username: string) => {
            dispatch(createPlayer(username));
        }
    }
}

const AddPlayerContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(AddPlayer);

export default AddPlayerContainer;
