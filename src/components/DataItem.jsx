export default function DataItem ({title, description}) {
    return (
        <div className='data-item'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}