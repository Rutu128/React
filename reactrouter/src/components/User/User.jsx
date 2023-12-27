import React from "react";
import { useParams } from 'react-router-dom'

export default function User() {
    const { userid } = useParams()
    return (
        <div className="bg-white text-stone-950">
            User : {userid}
        </div>
    )
}