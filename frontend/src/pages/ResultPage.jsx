import { useEffect, useState } from "react";
import API from "../services/api";

function ResultPage() {

    const [results, setResults] = useState([]);

    useEffect(() => {

        API.get("/results")
            .then((response) => {
                setResults(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            <h1>Results List</h1>

            {results.map((result) => (
                <div key={result.id}>
                    <p>Score: {result.score}</p>
                    <p>Total Questions: {result.totalQuestions}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ResultPage;