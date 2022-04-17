import TaskModal from "../components/Tasks/TaskModal";
import BottomNav from "../components/BottomNav";
import HomeworkList from "../components/Tasks/HomeworkList";

const TasksPage = () => {
  return (
    <>
      <TaskModal />
      <HomeworkList />
      <BottomNav />
    </>
  );
};


export default TasksPage;
