import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import { DataService } from "../../service/DataService";

function ChatbotPage({ className }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        DataService.getData().then((data) => {
            setData(data);
        })
    }, [])
    return (
        <div>
            <Chatbot className={`${className}`} data={data} />
        </div>
    )
}
export default ChatbotPage;