import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id: string,
  title: string,
  description: string,
  price: number,
  imageUrl: string,
  category: string,

}

export default function useFetch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Product[]>("https://parishbackend-2.onrender.com/api/products/");
      setData(response.data);
    } catch (error) {
        setError(error as Error | null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refresh };
}
