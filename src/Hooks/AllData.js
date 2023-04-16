import { useEffect, useState } from "react";

//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "Ui/Ux Design",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "App Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "5",
      icon: icon4,
      title: "Managment",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon5,
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "-> 2019",
      title: "Bachelor of Science (Computer Information Systems) ",
      place: "Kenya Methodist University",
      bg: "#FFF4F4",
    }
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "Oct 2021 - Present",
      title: "Software Reliability Engineer (Full Stack)",
      place: "Credrails",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2021",
      title: "Full Stack Software Developer",
      place: "Fintech Group",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "Jan 2019 - May 2019",
      title: "Software DEveloper",
      place: "Impax Business Solutions",
      bg: "#EEF5FA",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    singleData,
    isOpen,
    setIsOpen,
    menuItem,
    NavLink,
    serviceArray,
    educationArray,
    experiencesArray,
  };
};

export default AllData;
