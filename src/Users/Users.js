import React, {useEffect, useState} from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const Users = () => {
    const [users, setUsers] = useState([]);
    const getData = async () => {
        const resp = await axios.get(url);
        setUsers(resp.data);
    }

    useEffect(() => {
      getData();
    }, []);

    return(
        <div className="container" >
            <h1>Users DataBase</h1>
            <ul className="users d-flex justify-content-center flex-wrap row" >
                {
                    users.map(el => {
                        const{login:user,id,avatar_url:img,html_url:profile} = el;

                        return <li key={id} className="shadow col-sm-12 col-md-6 col-lg-4" >
                            <img src={img} alt={user} />
                            <div>
                                <h5>{user}</h5>
                                <button type="button" className="btn btn-success" onClick={() => window.open(profile, '_blank') } >View profile</button>
                            </div>
                        </li>
                    }
                    )
                }
            </ul>
        </div>
    );
    
};

export default Users;