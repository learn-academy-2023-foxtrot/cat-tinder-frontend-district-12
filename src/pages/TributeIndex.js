
import  React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const TributeIndex = ({tributes}) => {
    console.log("tributes:",tributes);
    return(
        <>
            <h2>View the Tributes</h2>
            <main className="card">
                {tributes?.map((tribute, index) => {
                return (
                    <div className="individual-card" key={index}>
                    < Card
                        style={{
                        width: '18rem'
                        }}
                    >
                        <img
                        alt={`profile picture for ${tribute.name}`}
                        src={tribute.image}
                        />
                        <CardBody>
                        <CardTitle className="card-title" tag="h5">
                            {tribute.name}
                        </CardTitle>
                        <CardSubtitle
                            className="card-subtitle"
                            tag="h6"
                        >
                            age: {tribute.age}
                            <br></br>
                            {tribute.district}
                        </CardSubtitle>
                        <Button>
                            <NavLink to={`/tributeshow/${tribute.id}`} className="nav-link">
                            Click to view more
                            </NavLink>
                        </Button>
                        </CardBody>
                    </Card >
                    </div>
                )
                })}
            </main>
            </>
        )

}

export default TributeIndex