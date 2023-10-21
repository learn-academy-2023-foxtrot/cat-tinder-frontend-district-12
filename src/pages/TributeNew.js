
import  React, {useState} from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const TributeNew = ({createTribute}) => {
    const [newTribute, setNewTribute] = useState ({
        
        name: "",
        age: "",
        hobby: "",
        image: "",
        district: ""
    })
    console.log("newTribute:", newTribute);

    const handleChange = (e) => {
        setNewTribute({ ...newTribute, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        createTribute(newTribute)
        navigate("/tributes")
    }
    const navigate = useNavigate()

    return(
        <>
            <h3>Add a Tribute</h3>
            <Form>
                <FormGroup>
                    <Label for="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="with a placeholder"
                    type="string"
                    onChange={handleChange}
                    value={newTribute.name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">
                    age
                    </Label>
                    <Input
                    id="age"
                    name="age"
                    placeholder="age placeholder"
                    type="number"
                    onChange={handleChange}
                    value={newTribute.age}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="hobby">
                    Hobby
                    </Label>
                    <Input
                    id="hobby"
                    name="hobby"
                    placeholder="hobby placeholder"
                    type="text"
                    onChange={handleChange}
                    value={newTribute.hobby}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">
                    Image
                    </Label>
                    <Input
                    id="image"
                    name="image"
                    placeholder="image placeholder"
                    type="url"
                    onChange={handleChange}
                    value={newTribute.image}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="district">
                    District
                    </Label>
                    <Input
                    id="district"
                    name="district"
                    placeholder="district placeholder"
                    type="string"
                    onChange={handleChange}
                    value={newTribute.district}
                    />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                    Submit Tribute
                </Button>
            </Form>
        </>
        )

}

export default TributeNew