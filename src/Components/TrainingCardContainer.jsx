import React from 'react'
import TrainingCard from './TrainingCard'

const TrainingCardContainer = ({ data }) => {
    const showData = (data) => {
        return data.map(item => {
            return <TrainingCard item={item}/>
        })
    }
    return (
        <div>
            {showData(data)}
        </div>
    )
}

export default TrainingCardContainer
