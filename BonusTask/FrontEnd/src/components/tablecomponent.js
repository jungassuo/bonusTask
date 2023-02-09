import React from "react";

export default function TableComponent({ theadData, tbodyData }) {

    if (theadData=== undefined && tbodyData === undefined){
        return <></>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {theadData?.map(heading => {
                        return <th key={heading} className="">{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData?.map((row, index) => {
                    return <tr key={index} className="">
                        {theadData.map((key, index) => {
                            return <td key={row[key]}>{row[key]}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    );
}