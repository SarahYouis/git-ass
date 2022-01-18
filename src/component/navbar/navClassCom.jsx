//class component 
import React from "react";
class Navbar extends React.Component {
    constructor() {
        super();
    }
    // return element i want to show
    render() {
        return (
            <>
                <div className="firstDiv">
                    <div className="row py-3 nav">
                        <div className="col-4 con">
                            <h1>sarah younis</h1>
                            <h4>web design</h4>
                            <button className="btn btn-light">contact me</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Navbar;