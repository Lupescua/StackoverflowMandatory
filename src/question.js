import React, {Component} from 'react';

class Question extends Component{

constructor (props){
  super(props);
}

render(){

  const id = this.props.id;
  const question = this.props.getQuestion(id);
  return (
    <React.Fragment>
      <h3>Question!</h3>
      <p>{question.text}</p>
      <ul>

      </ul>
    </React.Fragment>
  )
}

}
export default Question;