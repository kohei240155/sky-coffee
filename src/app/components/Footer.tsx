import Image from 'next/image';
import React from 'react'

const Footer = () => (
    <footer className="footer">
        <div className="logo">
            <a href="#">
                <Image src="/images/logo-white.png" alt="SKY COFFEE" width={200} height={40}/>
            </a>
        </div>
        <div className="copyright">&copy;Sky Coffee</div>
    </footer>
);

export default Footer;