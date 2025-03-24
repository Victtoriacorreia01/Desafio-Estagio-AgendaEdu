import React from "react";
import iconone from "../assets/icons8-selecionado-50 (1).png";
import icontwo from "../assets/icons8-editar-50.png";

const TaskCard = ({ task, onStart, onComplete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Prazo: {task.deadline}</p>
      <p>Status: <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span></p>
      <p><strong>Professor:</strong> {task.professor}</p>
      <p><strong>Matéria:</strong> {task.subject}</p>

      {task.status === "Pendente" && (
        <button
          className="start-task"
          onClick={() => onStart(task.id)}
        >
          Fazer Tarefa
          <img className="icontask" src={icontwo} alt="Ícone Iniciar" />
        </button>
      )}

      {task.status !== "Concluído" && (
        <button
          className="complete-task"
          onClick={() => onComplete(task.id)}
        >
          Tarefa Concluída
          <img className="iconok" src={iconone} alt="Ícone Concluir" />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
