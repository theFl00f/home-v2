import {
  faHome,
  faUserCircle,
  faFileAlt,
  faFolderOpen,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: faHome,
  },
  {
    to: "/about/",
    label: "About Me",
    icon: faUserCircle,
  },
  {
    to: "/skills/",
    label: "Skills",
    icon: faFileAlt,
  },
  {
    to: "/projects/",
    label: "Projects",
    icon: faFolderOpen,
  },
  {
    to: "/contact/",
    label: "Get in touch!",
    icon: faAddressBook,
  },
];
