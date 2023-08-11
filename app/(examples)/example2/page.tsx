"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Products = {
    name: string;
    owner: string;
    maker: string;
  }

const fetchProducts = async (): Promise<Products[]> => {
    const { data } = await axios.get('/products/api');
    return data; 
  }
 
export default function Example2() {
    const { data, isLoading, isError, refetch } = useQuery<Products[], Error>(['products2'], fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      {data?.map(post => (
        <div key={post.name}>
          <h3>{post.name}</h3>
          <p>{post.owner}</p>
        </div>
      ))}
    </div>
  );
}