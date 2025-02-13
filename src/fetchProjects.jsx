import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
const client = createClient({
  space: 'p3h6isgejv2v',
  environment: 'master',
  accessToken: import.meta.env.VITE_ContentAPITOKEN,
})

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const { items } = await client.getEntries({ content_type: 'project' })
      setProjects(items)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

export default useFetchProjects
