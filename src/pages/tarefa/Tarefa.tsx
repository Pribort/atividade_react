import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    } else {
      setTarefa("Que pena! Você não concluiu a tarefa!");
    }
  }, [completed]);

  return (
    <>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted((v) => !v)}>
        {completed ? "Revisar tarefa" : "Concluir tarefa"}
      </button>
    </>
  );
}

export default Tarefa;
