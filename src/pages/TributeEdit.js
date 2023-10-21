import  React, {useState} from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const TributeEdit = ({updateTribute, tributes}) => {
    const { id } = useParams()
    let currentTribute = tributes?.find((tribute) => tribute.id === +id)
      
    const [editTribute, setEditTribute] = useState ({
        
        name: currentTribute?.name,
        age: currentTribute?.age,
        hobby: currentTribute?.hobby,
        image: currentTribute?.image,
        district: currentTribute?.district
    })
    
    const handleChange = (e) => {
        setEditTribute({ ...editTribute, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = () => {
        updateTribute(editTribute, currentTribute?.id)
        console.log("editTribute in EDIT", editTribute);
        navigate("/tributes")
    }
    const navigate = useNavigate()
    console.log("editTribute:", editTribute);
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
                    placeholder="name a placeholder"
                    type="text"
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