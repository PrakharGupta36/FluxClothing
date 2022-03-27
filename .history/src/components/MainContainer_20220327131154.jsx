import Card from "./Card";

export default function MainContainer(props) {
  return (
    <main>
      <div className='category-container'>
        {props.list.map((i, index) => {
          const { imageUrl, title } = i;
          return <Card index={index} img={imageUrl} title={title} />;
        })}
      </div>
    </main>
  );
}
