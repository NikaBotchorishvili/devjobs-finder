"use client"

import { createContext, useState, useEffect } from "react"

const DataContext = createContext({});

function ContextProvider({children}: {children: React.ReactNode}) {
    const [ jobs, setJobs ] = useState();
    const context = {}
    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    );
}

export default ContextProvider;