import { produce } from "immer";

const state = {
  name: 'tom',
  hobbies: [
    'tennis',
    'soccer'
  ]
}

const newState = produce(state, draft => {
  draft.name = 'John';
  draft.hobbies[0] = 'baseball';
  console.log(draft);
})

// const newState = state;
// newState.name = 'John';

console.log(state, newState)