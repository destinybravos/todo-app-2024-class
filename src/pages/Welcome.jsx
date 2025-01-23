import { useNavigate } from "react-router-dom";
import StandardList from "../components/StandardList";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { FaWindows } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Welcome = () => {
    const navigate = useNavigate();

    const proceedToApp = () => {
        navigate('/todo');
    }

    const listItems = [
        {
            icon: <TbDeviceMobileCheck className="text-4xl text-primary" />,
            title: "Your List is Everywhere",
            description: "You can access your list from any device, anywhere in the world."
        },
        {
            icon: <FaWindows className="text-4xl text-primary" />,
            title: "Your List is Everywhere",
            description: "You can access your list from any device, anywhere in the world."
        },
        {
            icon: <IoSunnyOutline className="text-4xl text-primary" />,
            title: "Your List is Everywhere",
            description: "You can access your list from any device, anywhere in the world."
        }
    ]

    return (
        <div className="bg-slate-100 h-screen w-auto flex justify-center items-center px-6 py-4">
            <div className="w-full max-w-4xl mx-auto h-[30rem] bg-white flex items-center">
                <aside className="h-full w-1/2 flex flex-col justify-center">
                    <div className="px-6 text-center">
                        <h1 className="text-4xl font-bold text-primary flex items-center gap-2 mb-6">
                            Welcome to the Todo App
                        </h1>
                        <button role="button" onClick={proceedToApp} className="bg-primary-light hover:bg-primary text-white cursor-pointer font-bold py-2 px-4 rounded-sm">
                            Click to Open App
                        </button>
                    </div>
                </aside>

                <aside className="h-full w-1/2 bg-gray-200 flex flex-col gap-6 justify-center items-center overflow-auto">
                    {/* <StandardList 
                        icon={<TbDeviceMobileCheck className="text-4xl text-primary" />} 
                        title="Your List is Everywhere"
                        description="You can use this app anyhow you want. It's just a web app."
                    />
                    <StandardList 
                        icon={<FaWindows className="text-4xl text-primary" />} 
                        title="Your List is Everywhere"
                        description="You can use this app anyhow you want. It's just a web app."
                    />
                    <StandardList 
                        icon={<IoSunnyOutline className="text-4xl text-primary" />} 
                        title="Your List is Everywhere"
                        description="You can use this app anyhow you want. It's just a web app."
                    /> */}

                    {listItems.length > 0 && listItems.map((item, index) => (
                        <div key={index}>
                            <StandardList icon={item.icon} title={item.title} description={item.description} />
                        </div>
                    )) }
                </aside>
            </div>
        </div>
    )
}

export default Welcome;