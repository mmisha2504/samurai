import React; from "react";

function Comp2() {


    return (
        <>
            <h1>State</h1>
            <div>
                <button onClick={this.handler}>This button change state</button>
            </div>
            <div>
                {this.state.count % 2 === 0 ? 'even' : 'odd'}
            </div>
            <div>
                {this.state.count}
            </div>
        </>
    )
}