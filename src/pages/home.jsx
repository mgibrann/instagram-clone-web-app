import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state.auth);
  console.log(state);
  return <div>home</div>;
}
