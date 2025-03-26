import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import Header from "../components/Header/Header";

const HomePage = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Páginas 54 e 55 Matemática I", 
      deadline: "2025-03-25", 
      status: "Em andamento",
      professor: "João Silva",
      subject: "Matemática I"
    },
    { 
      id: 2, 
      title: "Páginas 30/31/32 Física II ", 
      deadline: "2025-03-26", 
      status: "Pendente",
      professor: "Maria Oliveira",
      subject: "Física"
    },
    { 
      id: 3, 
      title: "Trabalho de História (2 Guerra Mundial)", 
      deadline: "2025-03-20", 
      status: "Concluído",
      professor: "Carlos Pereira",
      subject: "História"
    },
    { 
      id: 4, 
      title: "Página 50 Biologia ", 
      deadline: "2025-03-23", 
      status: "Pendente",
      professor: "Daniela Pinheiro",
      subject: "Biologia"
    }
  ]);

  const [filter, setFilter] = useState("Todas");
  const [showNotification, setShowNotification] = useState(false);
  const [nearDeadlineTasks, setNearDeadlineTasks] = useState([]);

  useEffect(() => {
    const today = new Date();
    const urgentTasks = tasks.filter(task => {
      const deadlineDate = new Date(task.deadline);
      const diffTime = deadlineDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays <= 2 && task.status !== "Concluído";
    });

    setNearDeadlineTasks(urgentTasks);
    setShowNotification(urgentTasks.length > 0);

    if (urgentTasks.length > 0) {
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [tasks]);

  const handleStartTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: "Em andamento" } : task
    ));
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: "Concluído" } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => 
    filter === "Todas" || task.status === filter
  );

  return (
    <div className="homepage">
      <Header />
      
      {showNotification && (
        <div className="notification">
          ⚠️ Você tem {nearDeadlineTasks.length} tarefa(s) com prazo próximo!
        </div>
      )}

      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="Todas">Todas as Tarefas</option>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onStart={handleStartTask} 
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
