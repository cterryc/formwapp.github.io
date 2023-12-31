import * as React from 'react'
const EditSvg = ({ stroke }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    strokeWidth={1.5}
    // {...props}
    width='18'
    height='18'
    viewBox='0 0 24 24'
  >
    <path
      fill='none'
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3M17.954 16.94l1-1a1.121 1.121 0 0 1 1.586 0v0a1.121 1.121 0 0 1 0 1.585l-1 1m-1.586-1.586-2.991 2.991a1 1 0 0 0-.28.553l-.244 1.557 1.557-.243a1 1 0 0 0 .553-.28l2.99-2.992m-1.585-1.586 1.586 1.586'
    />
    <path
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16 2v3.4a.6.6 0 0 0 .6.6H20'
    />
  </svg>
)
export default EditSvg
