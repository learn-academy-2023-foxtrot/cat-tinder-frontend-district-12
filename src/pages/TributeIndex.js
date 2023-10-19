
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
                    <div key={index}>
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
                        <CardTitle tag="h5">
                            {tribute.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {tribute.age}
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