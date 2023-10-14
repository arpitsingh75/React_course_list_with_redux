import { useEffect, useState } from "react"
import { QueryStackTiles} from "../components/Common/QueryStackTiles";

export const QueryPage = () => {
    
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/query')
        .then(response => response.json())
        .then(data => {setData(data)})
    }, [])

    const createHomePage = () => {
        return data.map((query) => {
            return <div key={query.id} className="">
                <QueryStackTiles coursename={query.coursename} id={query.id} username={query.username} userquery={query.userquery} />
            </div>
        })
    }

    return <>
        <div className="flex flex-cols flex-wrap text-white min-h-screen bg-slate-900">
            {data && createHomePage()}
        </div>

    </>
}