import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build"; // For "Our Services"
import DevicesIcon from "@mui/icons-material/Devices"; // For "Technology"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"; // For "Projects"
import ContactMailIcon from "@mui/icons-material/ContactMail"; // For "Contact"

const navItems = [
  {
    link: "#home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    link: "#our-services",
    title: "Our Services",
    icon: <BuildIcon />,
  },
  {
    link: "#technology-we-love",
    title: "Technology",
    icon: <DevicesIcon />,
  },
  {
    link: "#project-completed",
    title: "Projects",
    icon: <AssignmentTurnedInIcon />,
  },
  {
    link: "#contact-with-us",
    title: "Contact",
    icon: <ContactMailIcon />,
  },
];

export default navItems;
