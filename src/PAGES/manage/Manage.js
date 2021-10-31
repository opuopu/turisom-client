import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Useauth from '../../context/Useauth';
import { IconName,AiFillDelete } from "react-icons/ai";
import Geturl from '../../utilites/geturl';
import { FcApproval } from "react-icons/fc";
Geturl()
const Manage = () => {
    const [items,setitem] = useState([])
    const [single,setsingle] = useState({})
    const [status,setstatus] =useState('pending')
    const [toogle,settoogle] = useState(false)
    const {user} = Useauth()
    
//  console.log(single);

    useEffect(()=>{
     
        fetch(Geturl(`allbooking`))
        .then(res =>res.json())
        .then(data =>setitem(data))
        
    },[toogle])
 
const handledelete = (id) =>{
    fetch(Geturl(`delete/${id}`),{
        method: "DELETE",


    })

    // -----------------
  
    .then(res=>res.json())
.then(data =>{
  const confirm = window.confirm('are you sure to delete?')
    if(confirm){
       
            const filters = items.filter( data =>data._id !== id)
            setitem(filters)
        }
})    
}

// 
const UpdateStatus = (id) =>{

settoogle(false)
console.log(id);

fetch(Geturl(`update/${id}`),{
    method:'PUT',
    headers:{
        'content-type': 'application/json'
    },
   
})
.then(res=> res.json())
.then(data=>{
    console.log(data);
    if(data.modifiedCount){
        settoogle(true)
     

    }
   
})


}
    
    return (
        <div className="manage-main">
            <h1 className="titles text-center my-5 py-3">admin manage booking</h1>
            <Container>
            <Table striped bordered hover variant="primary" responsive="sm">
            <thead>
      <tr>
        <th>#</th>
        <th>service name</th>
        <th> email</th>
        <th>name</th>
        <th>ticket price</th>
        <th> adress</th>
        <th> number</th>
        <th>status</th>
        <th>ticket name</th>
        <th>cancel</th>
      </tr>
    </thead>
    <tbody>
        {
            items.map((item,index)=>
                <tr>
        <td>{index}</td>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
        <td>{item?.displayname}</td>
        <td>bdt {item?.price} per person</td>
        <td>{item?.address}</td>
        <td>{item?.number}</td>
        {
      item?.status === 'approved' && (
        <td className="text-primary fw-bold">approved <FcApproval/></td>
         
      )
      || (
        <td  onClick={()=>UpdateStatus(item?._id)}>{status}  <span ><button className="approve">approve</button></span></td> 
      )
        }
        
        <td>biman airlinesex({item?.ticket})</td>
        <td className="text-center text-danger" onClick={()=>handledelete(item?._id)}> <AiFillDelete/></td>
      </tr>)
        }
     
      </tbody>
      </Table>
            </Container>
        </div>
    );
};


export default Manage;