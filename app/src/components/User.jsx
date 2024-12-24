import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { deleteUserById } from "../store/slices/userSlice"


export const User = ({ name, id }) => {

   const dispatch = useDispatch();

   const deleteUser = (id) => {
      dispatch(deleteUserById(id));
   }

   return (
      <li className="list-group-item">
         <div className="row p-2 gap-2">
            <Link to={`/user/${id}`} className='col'>
               <span>{name}</span>
            </Link>
            <Link to={`/update/${id}`} className="btn btn-primary btn-sm col-2">
               Редактировать
            </Link>
            <button onClick={() => deleteUser(id)} className="btn btn-danger btn-sm col-2">
               Удалить
            </button>
         </div>
      </li>

   )
}