import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  
  } catch (error) {
    console.error("Erro ao listar tarefas:", error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, { task });
    return response.data; 
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, { task: updatedTask });
    return response.data;  
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
    console.log("Tarefa excluída");
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
  }
};
