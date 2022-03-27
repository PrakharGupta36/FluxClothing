export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl, title } = i;
          return (
            <div className='card' key={index}>
              <div className='category'>
                <img src={imageUrl} alt='img' />
                <h2 className='centered'> {title} </h2>
                <p class='centered'> shop now </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
