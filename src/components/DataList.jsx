import { data } from "../data.js";
import DataItem from "./DataItem.jsx";

export default function DataList( ) {
    return (
        <section>
            <ul style={{display: 'flex', gridGap: '8px'}}>
                {data.map(item =>
                    <li key={item.title}>
                        <DataItem  {...item}  />
                    </li>
                )}
            </ul>
        </section>
    )
}