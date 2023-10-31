import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "red" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" >
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
      <Container title="個別を渡す"  
        children={
          [
            <Profile key={profile[0].name} {...profile[0]} />,
            <Profile key={profile[1].name} {...profile[1]} />
          ]
      }
      first={
        <Profile key={profile[0].name} {...profile[0]} />
      }
      />
    </div>
  );
};

export default Example;
