import "./Input.css";

function Radio({
  i,
  set,
}: {
  /** [...value] */
  i: string[];
  set: [any, React.Dispatch<React.SetStateAction<any>>];
}) {
  const id = (Math.random() + 1).toString(36).substring(7);
  return (
    <form
      className="radio high"
      onChange={(e) => {
        set[1]((e.target as HTMLInputElement).value);
      }}
    >
      {i.map((v) => (
        <div>
          <input
            name={id}
            type="radio"
            defaultChecked={v === set[0]}
            id={v}
            value={v}
          />
          <label htmlFor={v}>{v}</label>
        </div>
      ))}
    </form>
  );
}

export default Radio;
