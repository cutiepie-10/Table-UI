"use client"; 


import { tableRegistry } from '@/service/tableRegistry';
import {Drawer, Button, NavLink, Box, Stack} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {FadersHorizontalIcon, TableIcon} from '@phosphor-icons/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


export default function Sidebar(){
    const [opened, {open, close}] = useDisclosure(false);
    const searchParams = useSearchParams();
    const activeTable = searchParams.get('table')||'news-source';
    return (
        <div className= 'flex-1 p-5'>
            <Drawer  
            opened ={opened} 
            onClose={close} 
            title="Tables Navigation" 
            withinPortal={true} 
            size='sm'
            styles={{
                content:{backgroundColor:'#1b2238', color:'#C1C2C5',alignItems:'baseline'},
                header:{backgroundColor:'#1b2238', borderBotton:'1px solid #1f2229', },
                title:{fontSize:'lg', fontWeight:700, color:'var(--mantine-emerald-500)', letterSpacing:'0.5px' }
            }}>
                <Box className='mt-17 sm:mt-7 md:mt-12'>
                    <Stack>
                        {Object.values(tableRegistry).map((table)=>(
                            <NavLink 
                            key={`table-${table.id}`} 
                            variant='transparent'
                            label={table.name}
                            leftSection={<TableIcon
                                size={24}
                                weight={activeTable==table.id?'fill':'regular'}
                                className={activeTable==table.id? 'text-emerald-400':'text-gray-500'}
                            />}
                            component={Link}
                            active={activeTable==table.id}
                            c='light'
                            href={`/?table=${table.id}`} 
                            className={`rounded-lg py-3 px-4 font-medium transition-all duration-50 ${
                                        activeTable==table.id 
                                            ? '!bg-emerald-950/40 !text-emerald-400 border-l-4 border-emerald-500' 
                                            : '!text-gray-400 hover:bg-[#25262B] hover:!text-white'
                                    }`}
                            />
                            ))
                        }
                    </Stack>
                </Box>
            </Drawer>
            <Button variant='default' onClick={open} size="md" className='cursor-pointer'>
                    <FadersHorizontalIcon size={34} />
            </Button>
        </div>
    );
}