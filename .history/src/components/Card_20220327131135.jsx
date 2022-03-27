export default function Card(props) {
  return (
    <div className='card' key={props.key}>
      <div className='category'>
        <img src={props.img} alt='img' />
        <div className='centered'>
          <h2> {props.title} </h2>
          <p> shop now </p>
        </div>
      </div>
    </div>
  );
}
