import React from 'react'
import { useParams } from 'react-router-dom'


const EditOrder = () => {
    const params = useParams()
    return (
      <div>ViewOder{params.id}</div>
    )
}

export default EditOrder