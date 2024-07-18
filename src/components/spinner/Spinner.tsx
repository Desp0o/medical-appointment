import { Spin } from 'antd';
import "./spinner.css"

const Spinner = () => {
  return (
    <div className="spinner">
        <Spin size="large" spinning={true}/>
    </div>
  )
}

export default Spinner