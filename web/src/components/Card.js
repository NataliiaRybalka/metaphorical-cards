import './components.css';

export const Card = ({ card }) => {
  let title = card.description.split('»');
  title = title[0] + '»';
  let description = card.description.split('»');
  description = description[1];

  return (
    <div className='cardDiv'>
      <img src={card.image} alt={card.image.toString()} className='cardImage' />
      <div className='cardDecsr'>
        <h2>{title}</h2>
        <p className='cardDescr'>{description}</p>
      </div>
    </div>
  )
};
