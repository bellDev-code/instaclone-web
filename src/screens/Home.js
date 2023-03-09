import { isLoggedInVar } from "../apollo";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => isLoggedInVar(false)}>Log Out Now!!</button>
    </div>
  );
};

export default Home;
