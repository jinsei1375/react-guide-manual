import { useRouter } from "next/router";

export default function Setting({query}) {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  const clickHandler = () => {
    router.push('/', '/dumm-url'); //履歴残す
    // router.back(); history.back
    // router.reload(); 
    // router.replace('/', '/dumm-url'); //履歴消す
  }
  return (
    <>
      <h1>{ query.name }/{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}

export async function getServerSideProps({query}) {
  return {
    props: { query }
  }
}