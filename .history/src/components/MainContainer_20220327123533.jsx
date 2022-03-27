export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl } = i;
          return (
            <div>
              <div className='category-img'>
                <img src={imageUrl} alt='img' />
              </div>
              <div className='title-body'>
                <h2> </h2>
                <p> </p>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
