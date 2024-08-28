import "./ResultCard.css"
function ResultCard({ result }: any) {


    const animalImages: Record<string, string> = {
        Dog: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        Cat: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Bird: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Snake: 'https://images.pexels.com/photos/80474/grass-snake-snake-serpentes-natrix-80474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      };
      
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US");

      }

    return (
        <div id="resultCard">
            <p>Perfect Pet: {result.resultValue}</p>
            <p>Date of test: {formatDate(result.timeStamp)}</p>
            <div id="imageContainer">
            {
                result.resultValue ? <img src={animalImages[result.resultValue]} alt="animal" /> : null
            }
            </div>
        </div>
    )
}

export default ResultCard;