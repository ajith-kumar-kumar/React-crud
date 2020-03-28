import React, { Component } from 'react'
import axios from 'axios';
import RecordList from './RecordList.js';

export default class View extends Component {
    constructor(props){
        super(props);
        this.state={datas: []};
    }
    componentDidMount(){
        axios.get("http://localhost/react_crud/admin/view.php")
        .then(response=>{
            this.setState({datas:response.data});
        })
        .catch(function (error){
            console.log(error);
        })
    }
 
    usersList(){
        return this.state.datas.map(function(object,i){
            return <RecordList obj={object} key={i}/>;
        });
    }

    render() {
        
        return (
            <div className="container my-5">
                <div className="card cardNew">
             <h3 align="center" className="text-uppercase">Users List</h3>
             <div className="table-responsive">
             <table className="table table-bordered" style={{marginTop:20}}>
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>D.O.B</th>
                         <th>Color</th>
                         <th>Mobile</th>
                         <th>Gender</th>
                         <th>M_status</th>
                         <th>Address</th>
                         <th>Image</th>
                         <th colSpan="2">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.usersList()}
                 </tbody>
             </table>
             </div>
             </div>
            </div>
        )
    }
}

 