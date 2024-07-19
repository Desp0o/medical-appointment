import PatientIcon from "../../assets/PatientIcon"
import "./Widget_1.css"

const Widget_1 = () => {
  return (
    <div className="Widget_1">
        <div className="widget_1_block">
            <div className="widget_1_block_top">
                <PatientIcon />
                <p>Patient</p>
            </div>

            <p className="patient_number">324</p>
        </div>
    </div>
  )
}

export default Widget_1