import { Table } from "@mantine/core"


export default function SkeletonTable({rowCount=4,columnCount=4}:{rowCount:number, columnCount:number}){
    return(
        <Table withColumnBorders withTableBorder>
            <Table.Thead>
                <Table.Tr>
                    {Array.from({length:columnCount}).map((_,id)=>(
                        <Table.Th key={id}>
                        </Table.Th>
                    ))}
                </Table.Tr> 
            </Table.Thead>
            <Table.Tbody>
                {Array.from({length:rowCount}).map((_,id)=>(
                    <Table.Tr key={id}>
                        {
                            Array.from({length:columnCount}).map((_,id)=>(
                                <Table.Td key={id}>
                                </Table.Td>
                            ))
                        }
                    </Table.Tr>
                ))
                }
            </Table.Tbody>
        </Table>
    )
}