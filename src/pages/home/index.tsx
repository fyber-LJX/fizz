import React from 'react';
import { connect } from 'react-redux';
import testAction from './../../stores/actions/test';

interface PropsType {
    onClickHome: Function;
    count: number;
};
interface StateType {};

class Home extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className="main-content" onClick={() => { console.log(this.props.count);this.props.onClickHome(10) }}>Home{this.props.count}</div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        count: state.test.count
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClickHome: (count: number) => {
            dispatch(testAction(count))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);