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
              </div>
              <div className='title-body'>

              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
