import { useEffect } from "react";
import { useState } from "react";
import "./ResultCard.css"
function ResultCard({ result }: any) {

    return (
        <div id="resultCard">
            <p>{result.timeStamp}</p>
            <p>{result.resultValue}</p>
        </div>
    )
}

export default ResultCard;