import { ActionType } from "typesafe-actions"
import { Dispatch, bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "./../../stores/actions"
import { RootState } from "./../../stores/reducers"
import Blog from "./index"

type Action = ActionType<typeof actions>

interface PropsType {}

const mapStateToProps = (state: RootState) => {
    console.log(state)
    return {
        category: state.category
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: PropsType) =>
    bindActionCreators(
        {
            getCateGoryList: () => actions.testGetAction()
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
