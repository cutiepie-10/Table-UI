"use client"; 


import { tableRegistry } from '@/service/tableRegistry';
import {Drawer, Button} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {FadersHorizontalIcon} from '@phosphor-icons/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


export default function Sidebar(){
    const [opened, {open, close}] = useDisclosure(false);
    const searchParams = useSearchParams();
    const activeTable = searchParams.get('table')||'news-source';
    return (
        <div className= 'flex-1 p-5'>
            <Drawer  opened ={opened} onClose={close} title="Tables">
                <div className='flex flex-col gap-5 '>
                    {Object.values(tableRegistry).map((table)=>(
                        <Button 
                        key={`table-${table.id}`} 
                        size='compact-sm'
                        variant='light'
                        radius='sm'
                        leftSection={'--'}
                        c={activeTable==table.id?'moneyGreen.2':'dark'}
                        component={Link}
                        href={`/?table=${table.id}`} >
                                {table.name}
                        </Button>
                    ))
                    }
                </div>
            </Drawer>
            <Button variant='default' onClick={open} size="md" className='cursor-pointer'>
                    <FadersHorizontalIcon size={34} />
            </Button>
        </div>
    );
}