import httpClient from "./http-client";

export const registrationCall = (data) => {
    return httpClient({
        url: 'signup',
        method: 'POST',
        data
    })
}

export const loginCall = (data) => {
    return httpClient({
        url: 'login',
        method: 'POST',
        data
    })
}

export const getallexpenseRecord = (data) => {
    return httpClient({
        url:'expense/filter',
        method: 'POST',
        data
    })
}

export const gettodayexpense = () => {
    return httpClient({
        url: 'expense/list',
        method: 'GET'
    })
}

export const getAllTypename = () => {
    return httpClient({
        url: 'accounttype/list',
        method: 'GET'
    })
}

export const CreateType = (data) => {
    return httpClient({
        url:'/accounttype/create',
        method: 'POST',
        data
    })  
}

export const submitExpense = (data) => {
    return httpClient({
        url:'/expense/create',
        method: 'POST',
        data
    })  
}

export const DeleteExpense = (id) => {
    return httpClient({
        url: `/expense/delete/${id}`,
        method: 'DELETE'
    })
}