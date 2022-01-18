//class component 
import React from "react";
class Skill extends React.Component {
    state =
        {
            skillFoc: ["My Focus", "UI/UX desgine", "web designe", "mobile designe", "RWD designe"],
            skillPro: ["HTML", "CSS", "JS", "ES6", "BOOTSTRAB", "REACT", "Angler", "Flutter"]
        }

    render() {
        return (
            <>
                <div className="row thirdDiv">
                    <div className="container">
                        <div className="row my-5">
                            <h1>My Skill</h1>
                        </div>
                        <div className="row mx-2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error ratione natus similique eum asperiores sint? Perspiciatis beatae blanditiis, mollitia consequuntur officia error pariatur fuga dicta quisquam modi ipsam unde!
                            </p>
                        </div>
                        <div className="row py-4">
                            <div className="col">
                                <ul className="list-group skillLi">
                                    {this.state.skillFoc.map(ele => <li className="list-group-item list-group-item-dark">{ele}</li>)}
                                </ul>
                            </div>
                            <div className="col">
                                <div className="proLi">
                                    {this.state.skillPro.map(pro =>
                                        <li className="list-group-item list-group-item-dark">
                                            <span className="col-2">{pro}</span>
                                            <progress className="col-9" value="65" max="100" />
                                        </li>)}
                                    {/* <div class="progress" style="height: 1px;">
                                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Skill;