import React from 'react';

interface PropsType {};
interface StateType {};

export default class GroupItem extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className="group-item">
            </div>
        )
    }
}