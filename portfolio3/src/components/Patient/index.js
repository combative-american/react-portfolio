import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientInfo from './patients-test.json'

const Patient = () => {
    return (
        <main className="p-4 text-white">
            <div className="p-3 border border-4 border-white rounded">
                <h2>{`${PatientInfo[0].first} ${PatientInfo[0].last}`}</h2>
                <hr />
                <p>
                    <strong>Insurance Plan: </strong> {PatientInfo[0].provider} <br />
                    <strong>Primary Care Doctor: </strong> {PatientInfo[0].pcn}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <hr />
            </div>
        </main>
    )
}

export default Patient;