import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const Context = createContext();

const ContextComponent =({children}) =>{
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] =useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const updateCounts = async () =>{
        const {data} = await axios.get('api/candidatetracker/getcounts');
        setPendingCount(data[0]);
        setRefusedCount(data[1]);
        setConfirmedCount(data[2]);

    }

    useEffect(() =>{
        updateCounts();
    },[])
    return(
        <Context.Provider value={{pendingCount, confirmedCount, refusedCount, updateCounts}}>
            {children}
        </Context.Provider>
    )

   
}
export {Context, ContextComponent};