import { useEffect } from "react";
import { useState } from "react";
import "./ResultCard.css"
function ResultCard({ result }: any) {

    return (
        <div id="resultCard">
            <p>{result.timestamp}</p>
            <p>{result.result}</p>
        </div>
    )
}

export default ResultCard;