
const StandardList = ({icon = "", title = "Title", description = "Description"}) => {
    return (
        <div className="w-full px-6 gap-4 flex items-center">
            {/* Icon */}
            <section>
                {icon}
            </section>

            {/* Writeups */}
            <section>
                <h1 className="text-xl font-semibold mb-1">{title}</h1>
                <p className="text-">
                    {description}
                </p>
            </section>
        </div>
    )
}

export default StandardList;