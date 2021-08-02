import React, { PureComponent } from "react";
import RegularComponent from "./RegularComponent";
import PureComponentDemo from "./PureComponentDemo";

class ParentComponentPureComponentsDemo extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            name: "Andrew"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Andrew"
            });
        }, 2000);
    }

    render() {
        console.log("~~~~~~~ ParentComponentPureComponentDemo ~~~~~~~");

        return (
            <div>
                ParentComponentPureComponentDemo


                <RegularComponent name={this.state.name} />
                <PureComponentDemo name={this.state.name} />
            </div>
        );

    }

}

export default ParentComponentPureComponentsDemo;