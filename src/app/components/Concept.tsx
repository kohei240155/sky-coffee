import Image from 'next/image';
import React from 'react'

const Concept = () => (
    <section className="concept">
        <div className="container">
            <div className="img">
                <Image src="/images/concept.jpg" alt="青いカップのコーヒー" width={750} height={759} />
            </div>
            <div className="desc">
                <div className="subtitle">Concept</div>
                <h2 className="title">心静かにコーヒーを</h2>
                <div className="text">
                    <p>
                        立ち止まって、<br />
                        空の青さを眺めて、<br />
                        一息つきましょう。
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Concept;