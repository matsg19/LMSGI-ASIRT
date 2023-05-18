import React from 'react';

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'rat'];
    function getItemsList(){
    return ITEMS.map((item , index)=> <li key={index}>{item}</li>);
    }
    return (
    <ul>
        {getItemsList()}
    </ul>
    );
   }
   
   export const TablaItems= () => {
    let ITEMS = ['cat', 'dog', 'rat'];
    function getItemsList(){
    return ITEMS.map((item , index)=> <tr key={index}><td>{item}</td></tr>);
    }
    return (
    <table>
        <tbody>
            {getItemsList()}
        </tbody>
    </table>
    );
   }

   export default function ExtraerINFO(props) {
    if(props.tipo=="tabla"){
    return <ProcesarJSONTabla/>
    }
    else return <ProcesarJSONLista />
   }
   