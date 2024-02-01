import { add } from "./add";

const Example = () => {
  import("./add").then(module => {
    console.log(module);
  })

  const dynamicImport = async () => {
    const module = await import("./add");
    console.log(module);
  }
  dynamicImport();
  // console.log(add(1,2));
};

export default Example;
