
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = [];
  for(const animal of animals) {
    animalList.push(<li key={animal} >{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => <li key={animal}>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* {animalList} */}
        {helloAnimals}
        {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
