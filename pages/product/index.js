import { Navbar } from "@/src/components/navbar.component"
import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"

export default function ProductList(props) {
    const [ loading ,setLoading] =useState(false)
    const [ data, setData] = useState(()=> {
        if(props?.data){
            return props?.data
        }
        return []
    })
    const [ pagination , setPagination ] = useState({
        page:1,
        limit:10,
        max_page:10
    })

    async function ChangePage(page = 1){

        setLoading(true)
        await axios.get(
            'https://dummyapi.io/data/v1/user',{
                headers: {
                    'app-id':'64195b8b4be1bde76b4bf716'
                },
                params: {
                    page
                }
            }
            )
        .then((result)=> {
            setData(result.data?.data)
            setTimeout(()=> {
                setLoading(false)
            },3000)
        })
        .catch((err) => {
            setData([])
            setTimeout(()=> {
                setLoading(false)
            },3000)
        })
    }

    return(
        <div>
            <Navbar></Navbar>
            <div className="text-center font-bold text-3xl py-5">People List</div>
            <button type="button" onClick={()=> ChangePage(1)} style={{border:'1px solid black'}}>pindah page</button>
            {
                loading ? 'loading.....'
                    :
                Array.isArray(data) &&
                data.length > 0 ? data.map((item)=> {
                    return(
                        // <div className="pl-5">
                        //     <p className="py-0.5">ID : {item.id}</p>
                        //     <p className="py-0.5">Title : {item.title}</p>
                        //     <p className="py-0.5">First Name : {item.firstName}</p>
                        //     <p className="py-0.5">Last Name : {item.lastName}</p>
                        //     <p className="pb-5">Picture : {item.picture}</p>
                        // </div>
                        <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className="object-cover w-full h-48 rounded-t-lg"
                                src={item.picture}
                                alt="image"
                            />
                        <div className="p-4">
                        <p className="mb-2 leading-normal">
                            ID : {item.id}
                        </p>
                        <p className="mb-2 leading-normal">
                            Title : {item.title}
                        </p>
                        <p className="mb-2 leading-normal">
                            First Name : {item.firstName}
                        </p>
                        <p className="mb-2 leading-normal">
                            Last Name : {item.lastName}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                        </div>
                    </div>
                    )
                }): 'Data tidak ditemukan'
            }
        </div>
    )
}


export async function getServerSideProps(ctx){
    const [ err, data] = await axios.get(
        'https://dummyapi.io/data/v1/user',{
            headers: {
                'app-id':'64195b8b4be1bde76b4bf716'
            }
        }
        )
    .then((result)=> {
        return [ null, result.data?.data ?? []]
    })
    .catch((err) => {
        return [ err, null ]
    })

    //kondisi error

    return {
        props : {
            data: data
        }
    }
}