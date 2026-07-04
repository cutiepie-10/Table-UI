import { Table } from "@mantine/core"


export default function SkeletonTable(){
    return(
        <Table withColumnBorders withTableBorder>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>

                    </Table.Th>
                </Table.Tr> 
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>

                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    )
}