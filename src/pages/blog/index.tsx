import React from 'react';
import { connect } from 'react-redux';
import { testGetAction } from './../../stores/actions/test';

interface PropsType {};
interface StateType {};

class Blog extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className="main-content">Blog</div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        categoryList: state.categoryList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCateGoryList: () => {

        }
    }
}