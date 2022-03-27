export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl, id, title } = i;
          return (
            <div className='card' key={id}>
              <div className='category-img'>
                <img src={imageUrl} alt='img' />
              </div>
              <div className='title-body'>
                <h2> {title} </h2>
                <p> {} </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
