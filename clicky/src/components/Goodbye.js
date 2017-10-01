import React, {Component} from "react"

class Goodbye extends Component {
   constructor(props){
       super(props)
       this.state = {
           myName: "Huy"
       }
   }
    render(){
        return(
            <h1>Goodbye {this.props.name2} and {this.state.myName}</h1>
        )
    }
}

export default Goodbye


