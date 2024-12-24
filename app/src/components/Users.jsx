import { useEffect } from "react";
import { fetchUsers,selectAllUsers } from "../store/slices/userSlice"
import { useSelector, useDispatch } from "react-redux"
import {User} from './User'
import { Link } from "react-router-dom";


export const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);
    const usersStatus = useSelector((state) => state.status)

    useEffect(() => {
        dispatch(fetchUsers());
    },[dispatch, usersStatus])


    return (
      <div className="container-sm p-3 w-50">
         <ul class="list-group">
            {users.users.map((user) => {
               return <>
                  <User key={user.Id} name={user.Name} id={user.Id}/>
               </>
            })}
            
         </ul>
         <Link to={`/add`} className="btn btn-dark btn-md my-2">
         Добавить
      </Link>
     </div>
    )
 }