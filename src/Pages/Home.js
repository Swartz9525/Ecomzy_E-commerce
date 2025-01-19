import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const resp = await fetch(API_URL);
      const output = await resp.json();
      setPosts(output);
      console.log(output)
    }
    catch (error) {
      console.log("Not Fetched")
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-[90%]  mt-20'>
        {
          loading ? <Spinner /> : posts.length > 0 ?
            (
              <div className='flex flex-wrap justify-center items-center gap-10'>
                {
                  posts.map((post) => (<Product key={post.id} post={post} />))
                }
              </div>
            ) : <div><p>No Data Found</p></div>
        }
      </div>
    </div>
  )
}

export default Home