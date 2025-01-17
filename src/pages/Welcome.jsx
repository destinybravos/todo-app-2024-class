import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    const proceedToApp = () => {
        alert('Welcome to the Todo App!');
        navigate('/todo');
    }

    return (
        <div>
            <button onClick={proceedToApp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open App
            </button>
        </div>
    )
}

export default Welcome;