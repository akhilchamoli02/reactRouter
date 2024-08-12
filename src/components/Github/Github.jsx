import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const userData = useLoaderData();
    /*const [followers, setFollowers] = useState(100);
    const [imgUrl, setImgUrl] = useState("https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png");
    const [userData, setUserData] = useState({});
    useEffect(()=>{
        fetch("https://api.github.com/users/akhilchamoli02").then((response)=> response.json()).then((data)=>{
            setUserData(data);
            setFollowers(Number(data.followers));
            setImgUrl(data.avatar_url);
        })
    },[]);
    */
    return (
        <>
            <img className="w-24 h-24 rounded-full mx-auto" src={userData.avatar_url} alt="User Avatar" />
            <div className="bg-slate-600 text-white p-4 m-5 flex items-center justify-center">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <div>Github Followers: {userData.followers}</div>
            </div>
        </>
    );
}


export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/akhilchamoli02');
    return response;
}