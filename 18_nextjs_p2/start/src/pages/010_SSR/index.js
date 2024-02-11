import { useEffect, useState } from "react";

export default function SSR({message}) {
  console.log('hello');
  console.log(message);

  // ブラウザ上で操作したい場合
  useEffect(() => {
    console.log('useEffect')
    window.localStorage.setItem('key', 'value');
    document.cookie = 'val=0; path=/;'
  }, [])

  const [state, setState] = useState('bye');
  const val = 0;
  return <h3>{state}</h3>
}

export async function getServerSideProps(context) {

  const {cookie} = context.req.headers;
  // console.log(cookie);
  // console.log('executed');
  return {
    // redirect: {
    //   destination: '/',
    //   permanet: true
    // },
    props: { message: 'From Server Side Props' }
  }
}