import React from 'react'
import {tabProps} from "../../data/Data";

export default class Tab extends React.Component<tabProps> {
    constructor(props: tabProps) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="tab__content">
                    <div className="tab__top">
                        <div className="tab__position">{this.props.position}</div>
                        <div className="tab__period">{this.props.period}</div>
                    </div>
                    <div className="tab__location">{this.props.location}</div>
                    <ul className="tab__list">
                        {this.props.responsibilities.map((item, index) => {
                            return <div key={index} className="tab__item">{item}</div>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}