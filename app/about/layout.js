import Link from 'next/link';
import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          <Link href='/about/mission'>Mission</Link>
          <Link href='/about/vission'>Vission</Link>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default AboutLayout;