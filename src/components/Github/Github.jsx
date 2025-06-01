import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

 //const [data, setData] = useState(null); // default should be null, not []

 // useEffect(() => {
 // fetch("https://api.github.com/users/Yashpal568")
 //   .then((response) => response.json())
 //   .then((data) => {
 //   console.log(data);
 //     setData(data);
 //  });
 //}, []);
function Github() {
    const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? (
        <>GitHub followers: {data.followers}</>
      ) : (
        <>Loading GitHub data...</>
      )}
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Yashpal568')
   return response.json()
}