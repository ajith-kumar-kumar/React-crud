import React,{Component} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
class RecordList extends Component{

    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
       
    }
    onDelete(){
       axios.get("http://localhost/react_crud/admin/delete.php?id="+this.props.obj.id)
       .then(
           this.setState({
               redirect:true
           })
       )
       .catch(function (e){
           console.log(e);
       })
    }

    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/view/"/>
        } 
       
        return(
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.dob}</td>
                <td style={{backgroundColor : this.props.obj.color}}></td>
                <td>{this.props.obj.number}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.m_status}</td>
                <td>{this.props.obj.address}</td>
                <td><img src={"http://localhost/react_crud/admin/uploads/"+this.props.obj.image} alt="this file contains" className="img-fluid"></img></td>
                <td>
                    <Link  to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{this.onDelete()}}>Delete</button>
                </td>
            </tr>
        );
    }
}
export default RecordList;