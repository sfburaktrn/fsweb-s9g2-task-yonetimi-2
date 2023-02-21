import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
const Task = ({ taskObj, onComplete }) => {
  const sonuc = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
  });

  const kalanGün = new Date(taskObj.deadline);
  const suan = new Date();
  let renk;

  if (differenceInDays(kalanGün, suan) <= 3) {
    renk = true;
  } else {
    renk = false;
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <span className={renk ? "bg-[#ffd9d4]" : "bg-emerald-500"}>
          🚨 {sonuc}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
