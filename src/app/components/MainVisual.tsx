import Image from 'next/image';
import React from 'react'

const MainVisual = () => {
  return (
    <div className="main-visual">
        <picture>
            <source media="(min-width: 768px)" srcSet="/images/pc_main-visual.jpg" />
            <Image src="/images/sp_main-visual.jpg" alt="複数の青いカップのコーヒー" width={1200} height={600} />
        </picture>
    </div>
  )
}

export default MainVisual;