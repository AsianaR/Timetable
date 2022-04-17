import BottomNav from "../components/BottomNav";
import LessonCard from "../components/Timetable/LessonCard";
import TimetableHeader from "../components/Timetable/TimetableHeader";


const TimetablePage = () => {
    return(
        <>
            <TimetableHeader/>
            <LessonCard/>
            <BottomNav/>
        </>
    )
}

export default TimetablePage;