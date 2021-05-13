import React from 'react';
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchUser } from './function';

export default class Users extends React.Component {
    constructor(props) {
    super(props);
    this.state = {users: []};
    }

    async componentDidMount() {

        let resultatUsers  = await fetchUser() 
        resultatUsers.map(async(res) => {

        })
        this.setState({users: resultatUsers})
    // console.log(this.state.users[0])
     
    }

    render() {
        
        return (
            <div>
                <Table className="table table-striped table-dark ml-4 mr-4">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Date of Birth</th>
                            <th>Status</th>
                            <th>Save</th>

                        </tr>
                    </thead>

                    <tbody >
                    {this.state.users.map((user) => {console.log(user); return (
                        <tr> 
                            <th> {user.id} </th> 
                            <th> <Link to={`/user/${user.id}`} target="_blank" > {user.name} </Link> </th> 
                            <th> {user.username}</th>
                            <th> {user.email}</th>
                            <th> {user.phone} </th>
                            <th> {user.birth} </th>
                            <th> {user.status} </th>
                            <th> <button className='btn-secondary'> Save </button> </th>



                        </tr>)})}
                    </tbody>
                </Table>
                

                
            </div>
 
        );
    }
}

