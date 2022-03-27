export default function Card() {
  return (
    <div className='card' key={index}>
      <div className='category'>
        <img src={imageUrl} alt='img' />
        <div className='centered'>
          <h2> {title} </h2>
          <p> shop now </p>
        </div>
      </div>
    </div>
  );
}