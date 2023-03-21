import { Navbar } from "@/src/components/navbar.component"

export default function SSR(props) {
    console.log({props})
    let {data} = props
    return(
        <div>
            <Navbar></Navbar>
            <h1>Server Side Rendering</h1>
            <p>Simulasi Server Side Rendering di NextJs</p>
            <div className={'w-full space-y-6'}>
                {
                    data.map((item)=> {
                        return(
                            <div className={'w-full bg-gray-400 p-4'}> 
                                <p>ID : {item.id}</p>
                                <p>Title : {item.title}</p>
                                <p>First Name : {item.firstName}</p>
                                <p>Last Name : {item.lastName}</p>
                                <p>Picture : {item.picture}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    let data = []
    await fetch('https://dummyapi.io/data/v1/user')
        .then((response)=> response.json())
        .then((response)=> {
            data = response
        })
        .catch((err)=> {
            data = []
        })
    return {
        props: {
            data
        }
    }
}