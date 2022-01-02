import "./Input.css";

function Range({
  i,
  set,
}: {
  /** name */
  i: string;
  set: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  return (
    <div className="color high">
      <label className="inputTitle" htmlFor={i}>
        {i}
      </label>
      <input
        name={i}
        type="color"
        value={set[0]}
        onChange={(e) => {
          set[1](e.target.value.toUpperCase());
        }}
      />
      <label htmlFor={i}>{set[0]}</label>
    </div>
  );
}

export default Range;
