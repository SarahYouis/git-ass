//class component 
import React from "react";
class SecDiv extends React.Component {
    // constructor() {
    //     super();
    // }
    // return element i want to show
    render() {
        return (
            <>
                <div className="secDiv py-4 my-2">
                    <div className="row">
                        <div className="col-3">
                            <h1>contact me</h1>
                        </div>
                        <div className="col-8 m-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus sequi vel ut officiis, asperiores nulla, cum quia omnis corporis suscipit labore numquam eius qui deleniti, totam culpa dolor fugit?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error ratione natus similique eum asperiores sint? Perspiciatis beatae blanditiis, mollitia consequuntur officia error pariatur fuga dicta quisquam modi ipsam unde!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum unde praesentium velit, ullam perferendis doloribus voluptatem neque, autem quae molestias blanditiis. Earum adipisci obcaecati eligendi nesciunt voluptates doloribus assumenda.
                            </p>
                            <button className="btn btn-secondary">cotact me</button>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}
export default SecDiv;