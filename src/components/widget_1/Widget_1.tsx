import DoctorsIcon from "../../assets/DoctorsIcon"
import PatientIcon from "../../assets/PatientIcon"
import SurgeryIcon from "../../assets/SurgeryIcon"
import { UseDoctorDataBaseHook } from "../../hooks/UseDoctorDataBase"
import WidgetBlockComp from "../WidgetBlockComp"
import "./Widget_1.css"

const Widget_1 = () => {
  const { docDb } = UseDoctorDataBaseHook()

  return (
    <div className="Widget_1">
        <WidgetBlockComp icon={<PatientIcon />} text="Patient" quantity={324} isFiled={true}/>
        <WidgetBlockComp icon={<SurgeryIcon />} text="Surgery" quantity={124} isFiled={false}/>
        <WidgetBlockComp icon={<DoctorsIcon />} text="Doctors" quantity={docDb.length} isFiled={false}/>
    </div>
  )
}

export default Widget_1