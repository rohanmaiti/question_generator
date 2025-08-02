import "react"
import {useState} from "react"

export  function MCQChallenge({challenge, showExplanation = false}:any) {
    const [selectedOption, setSelectedOption] = useState<any>(null)
    const [shouldShowExplanation, setShouldShowExplanation] = useState<any>(showExplanation)

    const options = typeof challenge.options === "string"
        ? JSON.parse(challenge.options)
        : challenge.options

    const handleOptionSelect = (index:string | number ) => {
        if (selectedOption !== null) return;
        setSelectedOption(index)
        setShouldShowExplanation(true)
    }

    const getOptionClass = (index:number) => {
        if (selectedOption === null) return "option"

        if (index === challenge.correct_answer_id) {
            return "option correct"
        }
        if (selectedOption === index && index !== challenge.correct_answer_id) {
            return "option incorrect"
        }

        return "option"
    }

    return <div className="challenge-display">
        <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
        <p className="challenge-title">{challenge.title}</p>
        <div className="options">
            {options.map((option:any, index:string) => (
                <div
                    className={getOptionClass(index)}
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                >
                    {option}
                </div>
            ))}
        </div>
        {shouldShowExplanation && selectedOption !== null && (
            <div className="explanation">
                <h4>Explanation</h4>
                <p>{challenge.explanation}</p>
            </div>
        )}
    </div>
}