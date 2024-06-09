import Image from 'next/image'
import React from 'react'

const Header = () => (
    <header className="header">
        <h1 className="logo">
            <a href="#">
                <Image src="/images/logo.png" alt="SKY COFFEE" width={280} height={80} />
            </a>
        </h1>
    </header>
)
export default Header