import { createContext, useState } from "react";
import { useEffect } from "react";
export const CategoryContext = createContext()

export const CategoryContextProvider = ({children}) => {
    const [categoryData,setCategoryData] = useState([])
    const getData = async() =>{
        try {
          const res= await fetch("/api/categories");
          const data = await res.json()
      if(res.status === 200){
        setCategoryData(data.categories)
      }
        } catch (error) {
          console.error(error)
        }
      } 
      useEffect(()=>{getData()},[])
    return(
        <CategoryContext.Provider value={{categoryData}}>
            {children}
        </CategoryContext.Provider>
    )
}