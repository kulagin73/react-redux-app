import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserById, fetchUserById,deleteUserById } from "../store/slices/userSlice"
import { useParams, Link } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => selectUserById(state, id));
  const [userState, setUserState] = useState(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [])

  useEffect(() => {
    setUserState(user)
  }, [user])

  const deleteUser = (id) => {
    dispatch(deleteUserById(id));
  }


  if (!userState) {
    return (<div>Загрузка...</div>)
  }

  return (
    <div className="card m-3 w-50">
      <div className="card-body">
        <div className="row gap-2">
          <span className="card-title col">
            Имя:
            {userState.Name}</span>
          <span className="card-title col">
            Фамиля:
            {userState.Surname}
          </span>
          <span className="card-title col">
            Возраст:
            {userState.Age}
          </span>
        </div>

        <Link to={`/update/${id}`} className="btn btn-primary me-2">
          Редактировать
        </Link>
        <button onClick={() => deleteUser(id)} className="btn btn-danger">
          Удалить
        </button>
      </div>
    </div>
  )
}