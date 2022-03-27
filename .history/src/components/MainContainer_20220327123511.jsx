export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const {} = i;
          return (
            <>
              <div className='category-img'>
                <img src={i.imageUrl} alt='img' />
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
