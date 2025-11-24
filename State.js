

//******************** 👇 useState 👇 *************************/

import { useEffect } from "react"

//whenever state variable update ,then react trigger a reconciliation cycle (re-renders the components)

const [state,setState]=useState()


//********************* 👇 useEffect 👇********************/

// if there is no dependency array in useEffect then useEffect will be called on every render.
// if there is empty [] dependency array in useEffect then useEffect will be called on initial render(just once).
// if dependency array is [searchText] =>then useEffect will be called everytime  searchText is changed.

useEffect(()=>{

})


