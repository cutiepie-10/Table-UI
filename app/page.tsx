import  MainTable  from '@/components/MainTable';
import { Suspense } from "react";
import SkeletonTable from "@/components/SkeletonTable";
import Sidebar from '@/components/Sidebar';

interface PageProps{
  searchParams:Promise<{table?:string}>
}

export default async function Home({searchParams}:PageProps) {
  const params = await searchParams;
  const activeTable:string = params?.table ||'raw-news';
  console.log(activeTable);
  return (
  
    <div className='flex justify-content align-center flex-row gap-5'>

    <Sidebar/>
    <main className='flex-5 w-full h-full overflow-hidden'>
      <Suspense key = {activeTable} fallback={<SkeletonTable rowCount={7} columnCount={6}/>}>
          <MainTable activeTable={activeTable}/>
      </Suspense>
    </main>
    </div>
  );
}
