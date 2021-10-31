import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Useauth from '../../context/Useauth';
import { IconName,AiFillDelete } from "react-icons/ai";

const Mybooking = () => {
const [items,setitem] = useState([])
    const {user} = Useauth()
    const email = user?.email

    useEffect(()=>{
        fetch(`https://pacific-river-07624.herokuapp.com/findbooking/${email}`)
        .then(res =>res.json())
        .then(data =>setitem(data))
    },[email])
console.log(items);
const handledelete = (id) =>{
  fetch(`https://pacific-river-07624.herokuapp.com/delete/${id}`,{
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
    return (
        <div className="manage-main">
            <h1 className="text-center titles my-5 py-2"> my booking page</h1>
            <Container>

       
            <Table striped bordered hover variant="danger" responsive="sm" className="mb-5">
    <thead  className="">
      <tr >
        <th>#</th>
        <th>package name</th>
        <th>email</th>
        <th>name</th>
        <th>cost</th>
        <th>adress</th>
        <th>number</th>
        <th>status</th>
        <th>ticket name</th>
        <th>cancel</th>
      </tr>
    </thead>
    <tbody >
        {
            items.map((item,index)=>
                <tr key ={item._id}>
        <td>{index}</td>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
        <td>{item?.displayname}</td>
        <td>bdt {item?.price} per person</td>
        <td>{item?.address}</td>
        <td>{item?.number}</td>
    {
      item?.status === 'approved' &&     <td className="fw-bold text-primary">approved</td> || <td>pending</td>
    }
        <td>biman airlines(ex{item?.ticket})</td>
        <td className="text-danger text-center" onClick={()=>handledelete(item?._id)}> <AiFillDelete/></td>
      </tr>)
        }
      {/* <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr> */}
      </tbody>
      </Table>
</Container>
        </div>
    );
};

export default Mybooking;