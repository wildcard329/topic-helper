import { useEffect, useState } from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import AppleIcon from '@mui/icons-material/Apple';
// import GoogleIcon from '@mui/icons-material/Google';
import { FaAmazon, FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

const MaterialIcon = ({ iconLbl }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (iconLbl) {
      case 'facebook': {
        setIcon(<FaFacebook />);
        break;
      }
      case 'google': {
        setIcon(<FaGoogle />);
        break;
      }
      case 'apple': {
        setIcon(<FaApple />);
        break;
      }
      case 'amazon': {
        setIcon(<FaAmazon />);
        break;
      }
    }
  }, []);

  return icon
}

export default MaterialIcon
