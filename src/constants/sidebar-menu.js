import DashboardIcon from '../assets/icons/dashboard.svg';
import job from '../assets/icons/job.svg';
import candidate from '../assets/icons/candidate.svg';
import resume from "../assets/icons/bank.svg";

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: job,
        path: '/job',
        title: 'Jobs',
    },
    {
        id: 3,
        icon: candidate,
        path: '/candidate',
        title: 'Candidates',
    },
    {
        id: 4,
        icon: resume,
        path: '/resume-bank',
        title: 'Resume Bank',
    }
]

export default sidebar_menu;