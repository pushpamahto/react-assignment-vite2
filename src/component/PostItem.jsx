import { useState } from "react";
export function PostItem({data}){
    const [page,setPage] = useState(1);

    return (
     <>
       <p>PostItem Component</p>

      {data.map((post)=>{

        return(
            <div
             style={{ border:"1px solid black",
              padding:"12px",
               margin:"12px",
            }}
              key={post.id}>

                <div style={{display:"flex", width:"100%"}}>
                <p style={{ width:"20%"}}>{post.id}</p>
                <h3 style={{width:"60%", textAlign:"center" }}>{post.title}</h3>
                </div>

                <p>{post.body}</p>
                
             </div>
        );
     })}

     </>
   );
}