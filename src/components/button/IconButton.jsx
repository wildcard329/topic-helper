import MaterialIcon from "../icon/MaterialIcon"
import AppButton from "./AppButton"

const IconButton = ({ btnLabel }) => 
  <AppButton
    btnCb={null}
    btnClass={"icon-btn"}
    btnColor={"primary"}
    btnSize={"small"}
    btnType={"button"}
    btnVar={"outlined"}
  >
    <div className="col">
      <MaterialIcon iconLbl={btnLabel} />
      {btnLabel}
    </div>
  </AppButton>

export default IconButton;
