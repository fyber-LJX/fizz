import { ActionType } from "typesafe-actions"
import Category from "./index"
import { connect } from "react-redux"
import { Dispatch, bindActionCreators } from "redux"
import * as actions from "./../../stores/actions"
import { RootState } from "./../../stores/reducers"

type Action = ActionType<typeof actions>

const maoStateToProps = (state: RootState) => {
    return {
        category: state.category
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            getCateGoryList: () => actions.testGetAction()
        },
        dispatch
    )

export default connect(
    maoStateToProps,
    mapDispatchToProps
)(Category)
