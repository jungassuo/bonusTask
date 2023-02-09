import React, { Component, useState } from "react";
import TableComponent from "./tablecomponent"

import axios from "axios"

const Table = () => {
    const [dataArr,setDataArr] = useState([])

    const fetchData = () => {
        return axios.get("http://localhost:8080/data")
            .then((response) => {
                setDataArr(response.data)
            });

            
    }
    const getHeadings = () => {
        if(dataArr[0]!==undefined){
        return Object.keys(dataArr[0]);
        }
    }


    React.useEffect(() => {
        fetchData();
    }, [])

    const isUnDefined = () =>{
        return dataArr === undefined
    }

    if(!isUnDefined()){
        return (<TableComponent theadData={getHeadings()} tbodyData={dataArr} />)
    }else{
        return(<></>)
    }
}

export default Table
