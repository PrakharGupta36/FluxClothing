export default function Card(props) {
  return (
    <div className='card' key={props.index}>
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