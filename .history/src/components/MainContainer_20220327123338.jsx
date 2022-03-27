export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {return (<> </> <div className='category-img'>
          <img src='' alt='' />
        </div>
        <div className='title-body'>
          <h2> </h2>
          <p> </p>
        </div>)})}
      </div>
    </main>
  );
}
