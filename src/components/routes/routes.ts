import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Typography from "../views/Typography/Typography";
import Icons from "../views/Icons/Icons";
import Maps from "../views/Maps/Maps";
import NotificationsPage from "../views/Notifications/Notifications";
import AccountList from "../views/AccountList/AccountList";
import InstitutionList from "../views/ClassList/InstitutionList";
import Create from "../views/ClassList/Create";
import Login from "../views/Login/Login";
import CreateLesson from "../views/ClassList/CreateLesson";
import CreateExam from "../views/ClassList/CreateExam";
import CreateQuestion from "../views/ClassList/CreateQuestion";
import Detail from "../views/ClassList/Detail";
import ClassList from "../views/ClassList/ClassList";
import DetailLesson from "../views/ClassList/DetailLesson";
import DetailExam from "../views/ClassList/DetailExam";
import DetailQuestion from "../views/ClassList/DetailQuestion";
import CreateInstitution from "../views/ClassList/CreateInstitution";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/account",
    name: "Account List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AccountList,
    layout: "/admin",
  },
  {
    path: "/institution",
    name: "Institution List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: InstitutionList,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Settings",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/create/institution",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: CreateInstitution,
    layout: "/admin",
  },
  {
    path: "/create/class",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: Create,
    layout: "/admin",
  },
  {
    path: "/create/lesson",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: CreateLesson,
    layout: "/admin",
  },
  {
    path: "/create/exam",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: CreateExam,
    layout: "/admin",
  },
  {
    path: "/create/question",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: CreateQuestion,
    layout: "/admin",
  },
  {
    path: "/detail/class",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: Detail,
    layout: "/admin",
  },
  {
    path: "/detail/institution",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: ClassList,
    layout: "/admin",
  },
  {
    path: "/detail/lesson",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: DetailLesson,
    layout: "/admin",
  },
  {
    path: "/detail/exam",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: DetailExam,
    layout: "/admin",
  },
  {
    path: "/detail/question",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: DetailQuestion,
    layout: "/admin",
  },
];

export default dashboardRoutes


export const generalRoutes = [
  {
    path: "/login",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: Login,
    layout: "",
  }
];