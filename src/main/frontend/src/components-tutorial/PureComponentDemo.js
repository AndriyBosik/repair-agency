import React, { PureComponent } from "react";

class PureComponentDemo extends PureComponent {

    render() {
        console.log("~~~~~~~ PureComponentDemo ~~~~~~~");

        return (
            <div>
                Pure Component Demo {this.props.name}
            </div>
        );

    }

}

export default PureComponentDemo;