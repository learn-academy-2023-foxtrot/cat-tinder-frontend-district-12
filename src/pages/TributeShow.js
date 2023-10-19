import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const TributeShow = ({ tributes }) => {
    const { id } = useParams()
    let currentTribute = tributes?.find((tribute) => tribute.id === +id)
    return (
        <>
        <h2 className="heading">Tribute Show Page</h2>
            <main className="card">
                    <div className="individual-card" >
                        {currentTribute && (
                    < Card
                    style={{
                        width: '18rem'
                    }}
                    >
                        <img
                        alt={`profile picture for ${currentTribute.name}`}
                        src={currentTribute.image}
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {currentTribute.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            age: {currentTribute.age}
                            <br></br>
                            {currentTribute.district}
                        </CardSubtitle>
                        </CardBody>
                        <CardText>
                        hobby: {currentTribute.hobby}
                        </CardText>
                    </Card >
                        )}
                    </div>
            </main>
        </>
    )

}

export default TributeShow