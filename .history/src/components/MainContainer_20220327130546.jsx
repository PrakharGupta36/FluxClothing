import Card from "./Card";

export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl, title } = i;
          return (
            // <div className='card' key={index}>
            //   <div className='category'>
            //     <img src={imageUrl} alt='img' />
            //     <div className='centered'>
            //       <h2> {title} </h2>
            //       <p> shop now </p>
            //     </div>
            //   </div>
            // </div>
            <Card keu={index} image={imageUrl} />
          );
        })}
      </div>
    </main>
  );
}
