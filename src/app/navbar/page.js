async function TimeForLoading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

export default async function NavbarPage() {
  return (
    <main>
      <Name name="Nikhil Raj" />
      <div>
        <h1>This is NavBar</h1>
      </div>
    </main>
  );
}
const Name = (props) => {
  return (
    <div>
      <h1>Hi {props.name}</h1>
    </div>
  );
};
