import { Button } from "../ui/button";
import FormControls from "./form-controls";


function CommonForm({handleSubmit}){
    return (

        <form onSubmit={handleSubmit}>
            {/* render form controls here */}
            <FormControls/>
            <Button type="submit">{bottonText || 'submit'}</Button>
        </form>
    );
}

export default CommonForm