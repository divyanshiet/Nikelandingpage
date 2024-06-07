import './Sliderimage.css'
export default function Slidercard(props)
{
    return(
        <>
            <div className='slider'>
                <img src={props.src} />
                <div>{props.name}</div>
            </div>
            
        </>
    )
}
