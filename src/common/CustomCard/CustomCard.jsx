
import "./CustomCard.sass"

export const CustomCard = ({original_title, poster}) => {

    return (
        <div className="customCardDesign">
            <div>{original_title}</div>
            <div><img src={`https://image.tmdb.org/t/p/original/${poster}`}/></div>
            
        </div>
    )
}