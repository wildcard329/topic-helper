import { useEffect, useState } from 'react';
import { FaAmazon, FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import { MdOutlineTopic, MdOutlineQuiz } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { RxIdCard } from "react-icons/rx";
import { FcStatistics } from "react-icons/fc";

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
      case 'content': {
        setIcon(<MdOutlineTopic size={50} />);
        break;
      }
      case 'quizes': {
        setIcon(<MdOutlineQuiz size={50} />);
        break;
      }
      case 'notes': {
        setIcon(<GrNotes size={50} />);
        break;
      }
      case 'flash cards': {
        setIcon(<RxIdCard size={50} />);
        break;
      }
      case 'statistics': {
        setIcon(<FcStatistics size={50} />);
        break;
      }
    }
  }, []);

  return icon
}

export default MaterialIcon
