import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import ApiService from "../apiService";


function mapStateToProps(state: any)
{
    return {
        players: state.players
    }
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        createPlayer: async (username: string) =>
        {
            let api = new ApiService();
            const player = await api.createPlayer(username);

            if (player)
            {
                // update state if success
                dispatch(createPlayer(username));
            }
        }
    }
}

const AddPlayerContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(AddPlayer);

export default AddPlayerContainer;
