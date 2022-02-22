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
          thêm sản phẩm
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form >
                <div className="modal-header">
                  <h4 className="modal-title">thêm sản phẩm</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">nhập tên sản phẩm</label>
                    <input name="name" onChange={this.change} value={this.state.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tên sản phẩm" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">giá</label>
                    <input name="price" onChange={this.change} value={this.state.price} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập giá sản phẩm" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">số lượng</label>
                    <input name="quatity" onChange={this.change} value={this.state.quatity} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập số lượng sản phẩm" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">miêu tả</label>
                    <textarea name="description" onChange={this.change} value={this.state.description} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập miêu tả sản phẩm" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                    <input name="img" onChange={this.change} value={this.state.img} type="text" className="form-control" placeholder="https://" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={this.add} className="btn btn-primary">thêm</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">đóng</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div> 
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>tên sản phẩm</th>
            <th>giá sản phẩm</th>
            <th>số lượng</th>
            <th>miêu tả</th>
            <th>thao tác</th>
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
              <button type="button" data-toggle="modal" id={item.id} onClick={this.showedit} data-target={'#myModal'+item.id} className="btn btn-secondary">Sửa</button>
              <div className="modal fade" id={"myModal"+item.id}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Sửa sản phẩm</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">ảnh sản phẩm</label>
                          <input  name="img1" onChange={this.change1} value={this.state.img1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tên sản phẩm" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">nhập tên sản phẩm</label>
                          <input  name="name1" onChange={this.change1} value={this.state.name1} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tên sản phẩm" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">giá</label>
                          <input  name="price1" onChange={this.change1} value={this.state.price1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập giá sản phẩm" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">số lượng</label>
                          <input  name="quatity1" onChange={this.change1} value={this.state.quatity1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập số lượng sản phẩm" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">miêu tả</label>
                          <textarea name="description1" onChange={this.change1} value={this.state.description1} type="text" className="form-control" id="exampleInputPassword1" placeholder="nhập miêu tả sản phẩm" />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button onClick={e=>this.edit(e,item.id)} type="submit" className="btn btn-primary">cập nhật</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">đóng</button>
                      </div>
                      @csrf
                    </form>
                  </div>
                </div>
              </div>
              <a href="#" onClick={e=>this.delete(e,item.id)} type="button" className="btn btn-danger">Xóa</a>
            </td>
          </tr>
          })}
          </tbody>
      </table>
    </div>
    );
  }
}
