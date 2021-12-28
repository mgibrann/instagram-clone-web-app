import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state.auth);
  return <div>home</div>;
}
