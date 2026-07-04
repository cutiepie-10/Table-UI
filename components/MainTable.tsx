
import { tableRegistry } from "@/service/tableRegistry";
import { fetchData } from "@/service/table.data";
import DataTable from "./DataTable";

export default async function MainTable(props:{activeTable:string}){
    const tableMeta= tableRegistry[props.activeTable];
    const data =await fetchData<any>(tableMeta.endpoint);
    
    return (
        <DataTable columns= {tableMeta.columns} data={data}/>        
    )
};