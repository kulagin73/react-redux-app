import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {selectUserById ,fetchUserById} from "../store/slices/userSlice"
import { useParams } from "react-router-dom";

export const UpdateUser = () => {
    
    const {id} =  useParams();
    const user = useSelector((state) => selectUserById(state, id));
    const [userState, setUserState] = useState(user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserById(id));
    },[])

    useEffect(() => {
        setUserState(user)
    },[user])


    if(!userState) {
        return (<div>Загрузка...</div>)
    }
    
    return (
     <form action="/api/updateUser" method="POST" className="container-sm p-3 w-50">
        <div className="row gap-2">
            <input type="hidden" name="Id" readonly value={userState.Id}/>
            <label className="form-label col-12">
                <span>Имя</span>
                <input className="form-control" type="text" name="Name" value={userState.Name} onChange={(e) => setUserState({...userState, Name: e.target.value})}/>
            </label>
            <label className="form-label col-12">
                <span>Фамиля</span>
                <input className="form-control" type="text" name="Surname" value={userState.Surname} onChange={(e) => setUserState({...userState, Surname: e.target.value})}/>
            </label>
            <label className="form-label col-12">
                <span>Возраст</span>
                <input className="form-control"type="text" name="Age" value={userState.Age} onChange={(e) => setUserState({...userState, Age: e.target.value})}/>
            </label>
        </div>
        <div>
            <button className="btn btn-success my-2"  type="submit">Изменить</button>
        </div>
     </form>
    )
 }