import { createContext } from "react";

export const AppContext= createContext()

const ContextProvider=(props)=>{
    const phone="7639777260"
    const name="GreatStack"

    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;