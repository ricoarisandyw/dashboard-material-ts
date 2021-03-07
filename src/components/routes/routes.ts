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
import InstitutionList from "../views/List/institution/InstitutionList";
import Login from "../views/Login/Login";
import CreateLesson from "../views/List/lesson/CreateLesson";
import CreateExam from "../views/List/exam/CreateExam";
import CreateQuestion from "../views/List/question/CreateQuestion";
import Detail from "../views/List/classes/DetailClass";
import ClassList from "../views/List/classes/ClassList";
import DetailLesson from "../views/List/lesson/DetailLesson";
import DetailExam from "../views/List/exam/DetailExam";
import DetailQuestion from "../views/List/question/DetailQuestion";
import CreateInstitution from "../views/List/institution/CreateInstitution";
import CreateClass from "../views/List/classes/CreateClass";

const sidebarRoutes = [
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
  }
];

export const adminRoutes = [
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
    component: CreateClass,
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
]

export default sidebarRoutes


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