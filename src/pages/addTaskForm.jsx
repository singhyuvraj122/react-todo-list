import Input from "../components/input";
import Button from "../components/button";

function Form({title = "Form Title"}) {
    return (
        <form>
            <h3>{title}</h3>
            <Input />
            <Input />
            <Button>Add</Button>
        </form>
    )
}

export default Form;