import React, { Component } from 'react';
import axios from 'axios'; 
import {Redirect} from 'react-router-dom';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    
    return valid;
  }
export default class Edit extends Component {
    constructor(props){
        super(props);
            this.onChangeName  = this.onChangeName.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePass  = this.onChangePass.bind(this);
            this.onChangeDob   = this.onChangeDob.bind(this);
            this.onChangeColor = this.onChangeColor.bind(this);
            this.onChangeNumber= this.onChangeNumber.bind(this);
            this.onChangeGender= this.onChangeGender.bind(this);
            this.onChangeM_status= this.onChangeM_status.bind(this);
            this.onChangeAddress = this.onChangeAddress.bind(this);
            this.onChangeFile    = this.onChangeFile.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

        this.state={
            id:'',
            name:'',
            email:'',
            pass:'',
            dob:'',
            color:'#495057',
            mobile:'',
            gender:'male',
            m_status:'',
            address:'',
            redirect:false,
            image:null,            
            errors:{
                name:'',
                email:'',
                pass:'',
                mobile:''
            }
        }
    }
    componentDidMount(){
        axios.get("http://localhost/react_crud/admin/edit.php?id="+this.props.match.params.id)
        .then(response=>{
            console.log(response.data);
            this.setState({
                id:response.data.id,
                name:response.data.name,
                email:response.data.email,
                pass:response.data.pass,
                dob:response.data.dob,
                color:response.data.color,
                mobile:response.data.mobile,
                gender:response.data.gender,
                m_status:response.data.m_status,
                address:response.data.address,
                image:response.data.image
            });
            
        })
        .catch(function (error){
            console.log(error);
        })
    }

    onChangeName(e){
        const {value} = e.target;
        let errors = this.state.errors;

           if(value.length < 5){
            errors.name = "Name must be minimum 5 characters";
           }
           else errors.name='';    
        console.log(errors); 
        
        this.setState({
            name: e.target.value,
            errors
        })
    }


    onChangeEmail(e){
        const {value} = e.target;
        let errors = this.state.errors;
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';

        this.setState({
            email:e.target.value,
            errors
        })
    }


    onChangePass(e){
        const {value} = e.target;
        let errors = this.state.errors;

        if(value.length < 8){
            errors.pass = "Password must be minimum 8 characters length";
        }else
            errors.pass = "";

        this.setState({
            pass:e.target.value,
            errors
        })
    }
    

    onChangeDob(e){
        this.setState({
            dob:e.target.value
        })
    }
    onChangeColor(e){
        this.setState({
            color:e.target.value
        })
    }
    onChangeNumber(e){
        const {value} = e.target;
        let errors = this.state.errors;

       
        if(value.length != 10){
            errors.mobile="Phone Number Invalid";
        }
        else
            errors.mobile="";

        this.setState({
            mobile:e.target.value,
            errors
        })
    }

    onChangeGender(e){
        this.setState({
            gender:e.target.value
        })
    }
    
    onChangeM_status(e){
        this.setState({
            m_status:e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }

   onChangeFile(e){
       
   var ext = e.target.files[0].type.split('/')[1];
        var extArray = ['png', 'jpeg']
        if(extArray.indexOf(ext) == -1){
          alert("Please Select Valid Image ");
          e.target.value = '';
        }else{
            this.setState({
                image:e.target.files[0]
            });
        }
    }
    onSubmit(e){
        if(validateForm(this.state.errors)) {
            console.info('Valid Form');
         e.preventDefault();
        
        const fd = new FormData();
        fd.append('id',this.state.id);
        fd.append('name',this.state.name);
        fd.append('email',this.state.email);
        fd.append('pass',this.state.pass);
        fd.append('dob',this.state.dob);
        fd.append('color',this.state.color);
        fd.append('mobile',this.state.mobile);
        fd.append('gender',this.state.gender);
        fd.append('m_status',this.state.m_status);
        fd.append('address',this.state.address);
        fd.append('avatar',this.state.image);
        console.log(this.state.image);
        

         axios.post("http://localhost/react_crud/admin/update.php",fd,{
             headers:{
                 'content-type':'multipart/form-data'
             }
         })
         .then(response=>{
            console.log(response.data);
            alert("data updated sucessfully");
            this.reset();
            this.setState({
                redirect:true
            })
        })
        .catch(function (e){
            console.log(e);
        });
    }else{
        e.preventDefault();
    }
    }
    getCurDate(){
        var cur_date = new Date();
        var year = cur_date.getFullYear();
        var month = cur_date.getMonth() + 1; 
        if(month <= 9){
            month ='0'+month;
        }  
        var day = cur_date.getDate()+1;
        if(day <= 9){
            day ='0'+day;
        }  
        // console.log(day)
        var my_Date = year + '-' + month + '-' + day;
       
       return my_Date;
    }
   
    reset(){ 
        this.setState({name: "", email: "", pass: "",dob: "",
        color: "#495057",number:"",gender:"male",m_status:"",address:"",image:''})
    }
    render() {
        const {errors}=this.state;

        const {redirect}= this.state;
        if(redirect){
           return  <Redirect to='/view/'/>;
        }
        return (
            <div className="container my-5">
               <div className="card cardNew">
            <form onSubmit={this.onSubmit} id="myForm">
            <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required={true} type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}  placeholder="Enter Name" noValidate /> 
                        {errors.name.length > 0 && 
                        <small id="NameHelper" className="form-text" style={{color:'red'}}>{errors.name}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input required={true}  type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}  placeholder="Enter email"/> 
                        {errors.email.length > 0 && 
                        <small id="EmailHelper" className="form-text" style={{color:'red'}}>{errors.email}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required={true}  type="password" className="form-control" value={this.state.pass} onChange={this.onChangePass} placeholder="Password"/>
                        {errors.pass.length > 0 && 
                        <small id="EmailHelper" className="form-text" style={{color:'red'}}>{errors.pass}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">D.O.B</label>
                        {/* min={format(this.date, "YYYY-MM-DD")} */}
                        <input required={true} type="date" max={this.getCurDate()}  className="form-control" value={this.state.dob} onChange={this.onChangeDob}  placeholder="Enter dob"/> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="color">Favorite color</label>
                        <input required={true}  type="color" className="form-control" value={this.state.color} onChange={this.onChangeColor}  placeholder="Enter color"/> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="Mobile">Mobile Number</label>
                        <input required={true}  type="text" className="form-control" value={this.state.mobile} onChange={this.onChangeNumber}  placeholder="Enter Mobile Number"/> 
                        {errors.mobile.length > 0 && 
                        <small id="NameHelper" className="form-text" style={{color:'red'}}>{errors.mobile}</small>}
                    </div>

                    <div className="form-group" onChange={this.onChangeGender}>
                    <label htmlFor="gender">Select Your Gender:</label><br/>
                        
                        <div className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" defaultChecked={true}  name="gender" id="gender" value="male"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input  className="form-check-input" type="radio" name="gender"  id="gender" value="female"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label htmlFor="martial_status">Martial Status</label>
                        <select required={true}  className="form-control" value={this.state.m_status} onChange={this.onChangeM_status}  id="martial_status">
                            <option value="" disabled={true} >Select an gender</option>
                            <option value="Married" defaultValue={true}>Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea required={true} className="form-control" value={this.state.address} onChange={this.onChangeAddress} rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="custom-file">
                            <input  type="file" accept="image/png, image/jpeg" className="custom-file-input" onChange={this.onChangeFile} id="customFile"/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary">Update</button>
                    </div>
            </form>
            </div>
        </div>
        )
    }
}

 