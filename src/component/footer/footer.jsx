import React from "react";
class Footer extends React.Component {
    state = {
        
    }


    render() {
        return (
            <>
                <div className="row footDiv">
                    <div className="col-3">
                        <h4 className="row">web design</h4>
                        <span className="row">mobile application</span>
                        <span className="row">web application</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-secondery" style={{color:"white"}}>countact us</button>
                    </div>
                    <div className="col-3">
                        <li><i className="fa fa-spinner">face</i></li>
                        <li><i className="fa fa-spinner fa-spin">face</i></li>
                       
                    </div>
                </div>
            </>
        )

    }
} export default Footer;