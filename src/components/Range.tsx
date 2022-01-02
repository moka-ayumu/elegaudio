import "./Input.css";

function Range({
  i,
  set,
}: {
  /** [name, defaultValue, max] */
  i: string[];
  set: [number, React.Dispatch<React.SetStateAction<number>>];
}) {
  return (
    <div className="range high">
      <label className="inputTitle" htmlFor={i[0]}>
        {i[0]}
      </label>
      <input
        name={i[0]}
        type="range"
        min="1"
        max={i[2]}
        defaultValue={i[1]}
        // onChange={(e) => {
        //   set[1](Number(e.target.value));
        // }}
        onMouseUp={(e) => {
          set[1](Number((e.target as HTMLInputElement).value));
        }}
      />
      <label htmlFor={i[0]}>{set[0]}</label>
    </div>
  );
}

export default Range;
