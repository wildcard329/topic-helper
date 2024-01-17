import MaterialIcon from "../icon/MaterialIcon"
import AppButton from "./AppButton"

const LoginButton = ({ loginEntity }) => 
  <AppButton
    btnCb={null}
    btnClass={"login-btn"}
    btnColor={"primary"}
    btnSize={"large"}
    btnType={"button"}
    btnVar={"outlined"}
  >
    <MaterialIcon iconLbl={loginEntity} />
    {`log in with ${loginEntity}`}
  </AppButton>

export default LoginButton
