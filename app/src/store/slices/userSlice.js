import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'users',
    initialState: {users:[],status:""},
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'in progress'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'success'
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'fail'
                state.error = action.error.message
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.Id !== action.payload);
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.users = action.payload;
            })
    },
});


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('/api/getAllUsers');
        const data =  await response.json();
        return data;
    }
)

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id) => {
        const response = await fetch(`/api/getUserById/${id}`);
        const data =  await response.json();
        return data;
    }
)

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) => {
    let user = state.users.users.find((user) => user.Id == userId);
    return user;
};

export const deleteUserById = createAsyncThunk(
    'users/deleteUser',
    async(id) => {
        const response = await fetch(`/api/deleteUser/`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id": id})
        });
        return id;
    }
)

export default userSlice.reducer