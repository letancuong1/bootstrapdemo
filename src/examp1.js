import React, { Component } from "react";
export default class Examp1 extends Component {
  constructor(props){
      super(props)
      this.state={
        a:0,
        styleArrow:{
          color:'white',
          marginLeft:'100px'
        }
      }
    }
  changeArrow=(e)=>{
    console.log(e.target.value.includes("."));
    if(e.target.value>15 || e.target.value<0 || e.target.value.includes(".")){
      this.setState({
        a:0
      })
    }else{
      this.setState({
        a:e.target.value,
        styleArrow:{
          color:'white',
          marginLeft:e.target.value*50+"px"
        }
      })
    }
    
    
  }
  render() {
    return (
      <div className="container mt-5">
        <div style={{width: '770px', height: '20px', backgroundColor: 'blue'}}>
        <i style={this.state.styleArrow} class="far fa-arrow-alt-circle-up"></i>
        </div>
        <div className="form-group">
          <input value={this.state.a} onChange={this.changeArrow} type="number" min={0} max={15} className="form-control" name id aria-describedby="helpId" placeholder />
        </div>
      </div>
    )
  }
}