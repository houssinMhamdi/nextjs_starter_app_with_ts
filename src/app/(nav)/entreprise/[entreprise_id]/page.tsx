import React from 'react'

export default function page({ params }: { params: { entreprise_id: string } }) {
  return (
    <div>with id{params.entreprise_id}</div>
  )
}
