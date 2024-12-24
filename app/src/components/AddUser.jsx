
export const AddUser = () => {
    return (
     <form action="/api/addUser" method="POST" className="container-sm p-3 w-50">
        <div className="row gap-2">
            <label className="form-label col-12">
                <span>Имя</span>
                <input className="form-control" type="text" name="Name"/>
            </label>
            <label className="form-label col-12">
                <span>Фамиля</span>
                <input className="form-control" type="text" name="Surname"/>
            </label>
            <label className="form-label col-12">
                <span>Возраст</span>
                <input className="form-control" type="text" name="Age"/>
            </label>
        </div>
        <div>
            <button className="btn btn-success my-2" type="submit">Создать</button>
        </div>
     </form>
    )
 }