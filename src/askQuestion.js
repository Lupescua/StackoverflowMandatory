import React, {Component} from 'react';

class askQuestion extends Component{

constructor (props){
  super(props);
  this.state = {input:""}
}

onChange(event){
  this.setState({
    input:event.target.value
  })
}
render(){
  return (
    <React.Fragment>
      <h3>Ask Question!</h3>
      <input type="text" placeholder="type questions"></input>
      <button>Ask!</button>
    </React.Fragment>
  )
}

}
export default askQuestion;