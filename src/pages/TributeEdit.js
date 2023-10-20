import  React, {useState} from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
const TributeEdit = ({updateTribute}) => {
    const [editTribute, setEditTribute] = useState ({
        name: "",
        age: "",
        hobby: "",
        image: "",
        district: ""
    })
    const handleChange = (e) => {
        setEditTribute({ ...editTribute, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateTribute(editTribute)
        navigate("/tributeindex")
    }
    const navigate = useNavigate()
    return(
        <>
            <h3>Edit a Tribute</h3>
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
                    value={editTribute.name}
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
                    value={editTribute.age}
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
                    value={editTribute.hobby}
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
                    value={editTribute.image}
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
                    value={editTribute.district}
                    />
                </FormGroup>
                <Button onClick={handleSubmit} name="edit">
                    Edit Tribute
                </Button>
            </Form>
        </>
        )
}
export default TributeEdit