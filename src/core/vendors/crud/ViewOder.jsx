import React from 'react'
import { useParams } from 'react-router-dom'

const ViewOder = () => {
    const params = useParams()
  return (
    <div>ViewOder{params.id}</div>
  )
}

export default ViewOder