import React, { Component } from "react";

export default class Examp extends Component {
  constructor(props){
    super(props)
    this.state={
      id:null,
      name:null,
      price:null,
      quatity:null,
      description:null,
      img:null,
      name1:null,
      price1:null,
      quatity1:null,
      description1:null,
      img1:null,
      list:[]
    }
  }
  change=(e)=>{
    var name=e.target.name;
      this.setState({
        [name]:e.target.value,
        id:Math.floor(Math.random() * 11000000)
      })
  }
  change1=(e)=>{
    var name=e.target.name;
      this.setState({
        [name]:e.target.value,
      })
  }
  add=(e)=>{
    e.preventDefault();
    var list=this.state.list
    list.push({
      id:this.state.id,
      name:this.state.name,
      price:this.state.price,
      quatity:this.state.quatity,
      description:this.state.description,
      img:this.state.img,
    })
    this.setState({
      list:list,
      name:'',
      price:'',
      quatity:'',
      description:'',
      img:'',
      id:''
    })
    
  }
  delete=(e,id)=>{
    e.preventDefault()
    var newlist = this.state.list.filter(item => item.id !== id);
    console.log(newlist);
    this.setState({
      list:newlist
    })
  }
  showedit=(e)=>{
    var id=e.target.id
    var list=this.state.list
    for(var i=0;i<list.length;i++){
      if(list[i].id==id){
        this.setState({
          name1:list[i].name,
          price1:list[i].price,
          quatity1:list[i].quatity,
          description1:list[i].description,
          img1:list[i].img,
        })
      }
    }

  }
  edit=(e,id)=>{
    e.preventDefault()
    console.log(id);
    var list=this.state.list
    for(var i=0;i<list.length;i++){
      if(list[i].id==id){
        list[i] ={
          id:id,
          name:this.state.name1,
          price:this.state.price1,
          quatity:this.state.quatity1,
          description:this.state.description1,
          img:this.state.img1,
        };
      }
    }
    this.setState({
      list:list
    })
  }
  render() {
    return (
      <div style={{marginTop: '100px'}} className="container"> 
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          th??m s???n ph???m
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form >
                <div className="modal-header">
                  <h4 className="modal-title">th??m s???n ph???m</h4>
                  <button type="button" className="close" data-dismiss="modal">??</button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">nh???p t??n s???n ph???m</label>
                    <input name="name" onChange={this.change} value={this.state.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="t??n s???n ph???m" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">gi??</label>
                    <input name="price" onChange={this.change} value={this.state.price} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p gi?? s???n ph???m" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">s??? l?????ng</label>
                    <input name="quatity" onChange={this.change} value={this.state.quatity} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p s??? l?????ng s???n ph???m" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">mi??u t???</label>
                    <textarea name="description" onChange={this.change} value={this.state.description} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p mi??u t??? s???n ph???m" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">H??nh ???nh</label>
                    <input name="img" onChange={this.change} value={this.state.img} type="text" className="form-control" placeholder="https://" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={this.add} className="btn btn-primary">th??m</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">????ng</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div> 
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>H??nh ???nh</th>
            <th>t??n s???n ph???m</th>
            <th>gi?? s???n ph???m</th>
            <th>s??? l?????ng</th>
            <th>mi??u t???</th>
            <th>thao t??c</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map(item=>{
            return <tr>
            <td className="text-center"><img style={{width: '100px'}} src={item.img} alt="" /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quatity}</td>
            <td>{item.description}</td>
            <td>
              <button type="button" data-toggle="modal" id={item.id} onClick={this.showedit} data-target={'#myModal'+item.id} className="btn btn-secondary">S???a</button>
              <div className="modal fade" id={"myModal"+item.id}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">S???a s???n ph???m</h4>
                        <button type="button" className="close" data-dismiss="modal">??</button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">???nh s???n ph???m</label>
                          <input  name="img1" onChange={this.change1} value={this.state.img1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="t??n s???n ph???m" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">nh???p t??n s???n ph???m</label>
                          <input  name="name1" onChange={this.change1} value={this.state.name1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="t??n s???n ph???m" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">gi??</label>
                          <input  name="price1" onChange={this.change1} value={this.state.price1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p gi?? s???n ph???m" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">s??? l?????ng</label>
                          <input  name="quatity1" onChange={this.change1} value={this.state.quatity1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p s??? l?????ng s???n ph???m" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">mi??u t???</label>
                          <textarea name="description1" onChange={this.change1} value={this.state.description1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nh???p mi??u t??? s???n ph???m" />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button onClick={e=>this.edit(e,item.id)} type="submit" className="btn btn-primary">c???p nh???t</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">????ng</button>
                      </div>
                      @csrf
                    </form>
                  </div>
                </div>
              </div>
              <a href="#" onClick={e=>this.delete(e,item.id)} type="button" className="btn btn-danger">X??a</a>
            </td>
          </tr>
          })}
          </tbody>
      </table>
    </div>
    );
  }
}
