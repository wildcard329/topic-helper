import { Button } from "@mui/material"

const AppButton = ({ children, btnVar, btnColor, btnSize, btnClass, btnType, btnCb }) =>
  <Button 
    variant={btnVar}
    onClick={btnCb}
    color={btnColor}
    size={btnSize}
    className={btnClass}
    type={btnType}
  >
    {children}
  </Button>

export default AppButton
