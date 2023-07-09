import { useRef } from "react";
import { Robot } from "../types.ts";

interface FilterProps {
  listData: Robot[];
  onFilter: (filteredList: Robot[]) => void;
}

export function Filter({ listData, onFilter }: FilterProps) {
  const num = useRef(-1);
  const input = useRef<HTMLInputElement>(null);

  const updateList = () => {
    num.current = 0;
    const txt = (input.current as HTMLInputElement).value;

    const filteredList = listData.map((item) => {
      const show = item.first_name.toLowerCase().includes(txt.toLowerCase());
      if (show) num.current++;
      return { ...item, show };
    });
    onFilter(filteredList);
  };

  return (
    <div className="header">
      <h4 className="filter_title">
        {num.current !== -1 ? num.current : listData.length} items filtered
      </h4>
      <input ref={input} className="filter" onChange={updateList} />
    </div>
  );
}
