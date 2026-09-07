import { useEffect, useState } from "react";
import API from "../services/api";

function ResultPage() {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        API.get("/results")
            .then((response) => {
                console.log("Results from backend:", response.data);
                setResults(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching results:", error);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading Results...</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>

            <h1>Results</h1>

            {results.length === 0 ? (
                <h2>No Results Found</h2>
            ) : (

                results.map((result) => (

                    <div
                        key={result.id}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "8px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>{result.studentName}</h2>

                        <p>
                            Score: {result.score}
                        </p>

                        <p>
                            Total Questions: {result.totalQuestions}
                        </p>

                    </div>

                ))

            )}

        </div>
    );
}

export default ResultPage;