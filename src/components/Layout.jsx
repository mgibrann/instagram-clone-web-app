import Navigation from "./Navigation";

export default function Layout(props) {
  return (
    <>
      {/* <Navigation /> */}
      <main className="bg-gray-p">{props.children}</main>
    </>
  );
}
