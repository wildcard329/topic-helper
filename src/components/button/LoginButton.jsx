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
    <div className="align-left">
      <MaterialIcon iconLbl={loginEntity} />
      {`log in with ${loginEntity}`}
    </div>
  </AppButton>

export default LoginButton
