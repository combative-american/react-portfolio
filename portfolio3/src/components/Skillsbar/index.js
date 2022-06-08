import './index.css'

const Skillsbar = () => {
    return (
        <div className="skillsbar text-center mt-4 mb-5 p-3">
            <h3 className="text-light">Languages: </h3>
            <div className="mt-4">
                <i className="fa-brands fa-html5 fa-xl m-3"></i>
                <i className="fa-brands fa-css3 fa-xl m-3"></i>
                <i className="fa-brands fa-js fa-xl m-3"></i>
                <i className="fa-brands fa-php fa-xl m-3"></i>
                <i className="m-3">TypeScript</i>
                <i>SQL</i>
            </div>
            <div className="mt-5">
                <h3 className="text-light mb-3">Libraries/Frameworks: </h3>
                <i className="fa-brands fa-react fa-2xl"></i>
            </div>
        </div>
    )
}

export default Skillsbar;