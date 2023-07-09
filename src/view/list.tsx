import { Card } from "./card.tsx";
import { Robot } from "../types.ts";

interface ListProps {
  listData: Robot[];
}

export function List({ listData }: ListProps) {
  return (
    <div className="cards-list">
      <ul>
        {listData
          .filter((item) => item.show)
          .map((item) => (
            <li className="card-item" key={item.id}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
}
