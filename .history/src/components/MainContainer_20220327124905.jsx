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
                <div>
                  <h2 className='centered'> {title} </h2>
                  <p className='centered'> shop now </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
