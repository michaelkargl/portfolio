import React, {useEffect} from "react"
import {Layout} from "../components";
import {navigate} from "gatsby"
import './index.scss';


const IndexPage: React.FC = () => {

    useEffect(() => {
        navigate('/curriculum/about-me', {replace: true})
    }, [])

    // briefely shown before redirecting
    return (
        <div className='index-component'>
            <Layout/>
        </div>
    )
}

export default IndexPage
