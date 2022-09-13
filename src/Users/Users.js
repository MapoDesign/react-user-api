import React, {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const url = "https://api.github.com/users";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    
    const getData = async () => {
        setIsLoading(true);
        try {
            const resp = await axios.get(url);
            setTimeout(() => {
                setUsers(resp.data);
                setIsLoading(false);
            }, 2000);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
      getData();
    }, []);

    if (isLoading) {
        return <Loading/>
    } 
    if (isError) {
        return <Error/>
    }

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

const Error = () => {
    return (<div>
        <p className="text-white">There is an Error!</p>
    </div>
    )
}