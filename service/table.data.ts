
const baseUrl= process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchData<TData>(endpoint:string):Promise<TData[]>{
    
    const data:Promise<TData[]> =  fetch(`${baseUrl}/${endpoint}`,{
        cache: 'default',
        next:{revalidate:300},
    }
    ).then((res)=>{
        if(!res.ok){
            console.error(`Error occured while loading data:${res.status}`);
            throw new Error(`error occured while fetching data`);
        }
        return res.json();
    });
    return data;
}
