import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      try{
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch(error){
        setError({ message: error.message || 'Failed to load items, please try again later.'})
      }
      setLoading(false)
    }
    fetchData()
  }, [url])
  return { data, loading, error }
}
