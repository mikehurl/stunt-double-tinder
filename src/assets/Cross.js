import React from 'react'

const Cross = ({stroke}) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default Cross
