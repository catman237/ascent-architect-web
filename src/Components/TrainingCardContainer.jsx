import React from 'react'
import TrainingCard from './TrainingCard'

const TrainingCardContainer = ({ entries, setEntries }) => {
    const showData = (entry) => {
        return entries.map(entry => {
            return <TrainingCard entry={entry} entries={entries} setEntries={setEntries}/>
        })
    }
    return (
        <div className='trainingCardContainer'>
            {showData(entries)}
        </div>
    )
}

export default TrainingCardContainer
