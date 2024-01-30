// "use client";

import { useState } from "react"

export default function Carousel () {
    const exampleData = ["Hello", "Hi", "Another greeting", "Goodbye"]
    const [index, setIndex] = useState(0)

    return(
        <section className="p-">
            <div>{exampleData[index]}</div>
            <div className="text-pink-600">
                <button onClick={() => setIndex(index - 1)} className="p-1">Previous</button>
                <button onClick={() => setIndex(index + 1)} className="p-1">Next</button>
            </div>
            
        </section>
    )
}