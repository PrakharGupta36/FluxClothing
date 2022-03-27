export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl, title } = i;
          return (
            <div className='card' key={index}>
              <div className='category-img'>
                <img src={imageUrl} alt='img' />
                <h2> {title} </h2>
                <p> shop now </p>
              </div>
              <div className='title-body'></div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
