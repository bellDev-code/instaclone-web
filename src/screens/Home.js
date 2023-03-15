import { logUserOut } from "../apollo";

export const Home = () => {
  return (
    <div>
      <h1>welcome instaclone!!</h1>
      <button onClick={logUserOut}>Log Out Now!!</button>
    </div>
  );
};

export default Home;
