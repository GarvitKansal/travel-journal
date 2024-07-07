import React from "react"
import Card from "./Card"
import data from "../data"

export default function MainContent() {

    const cards = data.map(card => {
        return <Card {...card}/>
    })

    return (
        <main>
            {cards}
        </main>
    )
}