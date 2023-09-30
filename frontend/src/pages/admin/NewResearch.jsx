import React from 'react'

import ResearchCard from '../../components/admin/ResearchCard'
import "../../assets/css/admin/newresearch.css"

export default function NewResearch() {
  return (
    <>
      <h1 className="new-research__title">
        New Submitted Research
      </h1>
      <ResearchCard />
      <ResearchCard />
    </>
  )
}
