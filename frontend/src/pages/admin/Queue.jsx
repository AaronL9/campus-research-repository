import React from 'react'

import QueueCard from '../../components/admin/QueueCard'

import "../../assets/css/admin/queue.css"

export default function Queue() {
  return (
    <>
      <h1 className="queue__title">
        Queue
      </h1>
      <QueueCard />
      <QueueCard />
    </>
  )
}
