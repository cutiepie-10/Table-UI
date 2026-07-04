'use client';

import {
    useReactTable,
    ColumnDef,
    Table as TableType,
    Column,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    PaginationState,
    getPaginationRowModel
} from '@tanstack/react-table';
import { useState } from 'react';
import {
    Table,Button,
    Pagination
} from '@mantine/core';

import{
    SortAscendingIcon,
    SortDescendingIcon,
    FunnelSimpleXIcon
} from '@phosphor-icons/react';

interface DataTableProps<TData=Record<string,number>>{
    columns:ColumnDef<TData>[];
    data:TData[];
}
export default function DataTable<TData=Record<string,number>>({columns, data}:DataTableProps<TData>){
    
    const [pagination, setPagination] = useState<PaginationState>(
        {
            pageIndex:0,
            pageSize:10,
        }
    )
    const table= useReactTable(
        {
            data,
            columns:columns,
            getCoreRowModel:getCoreRowModel(),
            getSortedRowModel:getSortedRowModel(),
            getFilteredRowModel:getFilteredRowModel(),
            getPaginationRowModel:getPaginationRowModel(),
            state:{
                pagination,
            },
            onPaginationChange:setPagination,
        }
    )

    return (
            <div className='p-5 flex flex-col gap-6'>
                <Table.ScrollContainer maxHeight={800}>

                
                <Table withColumnBorders withTableBorder highlightOnHover stickyHeader stickyHeaderOffset={5} horizontalSpacing={'sm'}>
                    <Table.Thead>
                            {
                                table.getHeaderGroups().map((headerGroup)=>(
                                    <Table.Tr  key={headerGroup.id}>
                                        {headerGroup.headers.map((header)=>(
                                            <Table.Th key = {header.id} c={'white'} bg={'moneyGreen.7'} colSpan={header.colSpan} >
                                                {
                                                    header.isPlaceholder ? null: (

                                                        <div
                                                            className={`flex flex-col justify-between items-center w-full h-full ${header.column.getCanSort()
                                                                ?'cursor-pointer select-none':
                                                                ''
                                                            }`}
                                                        >
                                                            <div className='flex flex-row gap-2 w-full'>
                                                                {flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext(),
                                                                )}
                                                                {
                                                                    header.column.getCanSort()&&<SortingButton onClick={header.column.getToggleSortingHandler} isSorted={header.column.getIsSorted}/>
                                                                }
                                                            </div>
                                                            {
                                                                header.column.getCanFilter() ?(
                                                                    <div className='w-full text-gray-600'>
                                                                        <Filter column={header.column} table={table}/>
                                                                    </div>
                                                                ):null
                                                            }
                                                        </div>
                                                        

                                                    )
                                                }
                                            </Table.Th>
                                        ))}
                                    </Table.Tr>
                                ))
                            }
                    </Table.Thead>
                    <Table.Tbody>
                        {table.getRowModel().rows.map((row)=>(
                            <Table.Tr key={row.id}>
                                {
                                    row.getVisibleCells().map((cell)=>(
                                            <Table.Td key={cell.id}>
                                                {
                                                    flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )
                                                }
                                            </Table.Td>
                                    ))
                                }
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
                </Table.ScrollContainer>
                <div className='p-2 m-2 flex gap-5'>
                    <Pagination total={table.getPageCount()-1} onChange={(page)=>{
                        table.setPageIndex(page);
                    }} value ={table.getState().pagination.pageIndex}
                    />
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value))
                        }}
                        >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
       
    );
};
function Filter({
    column,
    table
}:{
    column:Column<any,any>
    table:TableType<any>
}){ 
    const firstValue= table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue =   column.getFilterValue();
    return typeof firstValue ==='number' ?(
        <div className="flex space-x-2 gap-1" onClick= {(e)=>e.stopPropagation()}>
            <input
                type= "number"
                value= {(columnFilterValue as [number,number])?.[0]??''}
                onChange = {(e)=>
                    column.setFilterValue((old:[number,number])=>[
                        e.target.value,
                        old?.[1],
                    ])
                }
                placeholder = {'Min'}
                className = 'flex-1 border-1 bg-white shadow-md rounded-sm'
            />
            <input
                type= "number"
                value= {(columnFilterValue as [number,number])?.[1]??''}
                onChange = {(e)=>
                    column.setFilterValue((old:[number,number])=>[
                        old?.[0],
                        e.target.value,
                    ])
                }
                placeholder = {'Max'}
                className = 'flex-1 border-1 bg-white shadow-md rounded-sm'
            />
        </div>
    ):
    (
        <input
            type = "text"
            className= "p-2 w-full border-1 shadow-md rounded-sm bg-gray-200"
            onChange= {(e)=>column.setFilterValue(e.target.value)}
            onClick = {(e)=>e.stopPropagation()}
            placeholder='Search...'
            value = {(columnFilterValue??'') as string}
        />
    )
};
function SortingButton(props:{onClick:()=>any,
isSorted:()=>any}){
    return(
        <Button onClick={props.onClick()} bg={'transparent'} >
            {props.isSorted()===false && <FunnelSimpleXIcon size={24}/>}    
            {props.isSorted()==='asc' && <SortAscendingIcon size={24}/>}
            {props.isSorted()==='desc'&& <SortDescendingIcon size= {24}/>}
        </Button>
    );
}
function RefreshButton(){
    return (
      <Button >
        Refresh
      </Button>  
    );
}
