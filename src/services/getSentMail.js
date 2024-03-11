import axios from "axios";
import { json } from "react-router-dom";
class sendMail{

    async send(data) {
        const val=await axios.get(`http://localhost:5000/sent/${data}`
      );
        console.log(val.data);
        return val.data;
    }
}
const sentMail=new sendMail();
export default sentMail;