import { useEffect,useState } from 'react'
import './App.css'
import { PostItem } from './component/PostItem';

function App() {

  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [page, setPage] = useState(1);
 

 useEffect(() => {
  fetchData();
 }, [page]);

  async function fetchData(){

    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      let d1 = await res.json();
      setData(d1);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      
    }


  }

  return (
    <>
    {isLoading ? (
    <p>data is loading.... please wait</p>
    ) : ( 
    <div>
      <PostItem data = {data}/> 
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <button onClick={() => {

          if(page>1){
            setPage(page-1)
          }
        }}>prev</button>
        <p>{page}</p>
        <button onClick={() =>setPage(page+1)}>next</button>
      </div>
    </div>
        )}
  </>
  );
  
}

export default App;
