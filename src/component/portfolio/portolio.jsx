import React from "react";
class Portfolio extends React.Component {
    state =
        {
            data: [
                {id:1, name:"web design", color:"dimgrey"},
                {id:2, name:"mobile design", color:"darkgrey"},
                {id:3, name:"lood design", color:"dimgrey"},
                {id:4, name:"web application", color:"darkgrey"},
                {id:5, name: "andorid application", color:"dimgrey"},
                {id:6, name:"PWD application", color:"darkgrey"}]
            
        }

    render() {
     
        return (
            <>
                <div className="row portDiv">
                    <div className="row py-5">
                        <h1 style={{textAlign:"start", marginLeft:"4px"}}>Portfolio</h1>
                    </div>
                    <div className="row m-auto">
                        {this.state.data.map(item =>
                            <div className="container col-3 m-4 p-0" 
                            style={{height:"90px",backgroundColor:item.color,textAlign:"center"}} 
                            key={item.id}>{item.name}
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}
export default Portfolio;