import {
  himang,
  yashasvi,
  Member3,
  Abhinav,
  manan,
  traffic_management_icon,
  time_management_icon,
  green_goals_icon,
  safety_icon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Our Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Effective Traffic Management",
    icon: traffic_management_icon,
  },
  {
    title: "Productive time organization",
    icon: time_management_icon,
  },
  {
    title: "Green Goals",
    icon: green_goals_icon,
  },
  {
    title: "Improved Safety",
    icon: safety_icon,
  },
];

const team = [
  {
    title: "Himang Bhatia",
    icon: himang,
    linkedin_profile: "https://www.linkedin.com/in/himang-bhatia-aa442b330/",
    designation: "Founder & CEO",
  },
  {
    title: "Yashasvi Attri",
    icon: yashasvi,
    linkedin_profile: "https://www.linkedin.com/in/yashasvi-attri-3b4b78276/",
    designation: "Co-founder",
  },
  {
    title: "Abhinav Jain",
    icon: Abhinav,
    linkedin_profile: "https://www.linkedin.com/in/abhinav-jain-028718343/",
    designation: "Co-founder",
  },
  {
    title: "Tannu Kasana",
    icon: Member3,
    linkedin_profile: "https://www.linkedin.com/in/tannu-kasana-430a3b293/",
    designation: "Co-founder",
  },
  {
    title: "Manan Bagga",
    icon: manan,
    linkedin_profile: "https://in.linkedin.com/in/manan-bagga-893189247",
    designation: "Founding Software & Web Engineer",
  },
];

export { services, team };