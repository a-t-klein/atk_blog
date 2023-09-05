import "./globals.css";

import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import BlogContainer from "./Containers/BlogContainer";

export default function Home() {
  return (
    <main>
      <Greeting />
      <BlogContainer />
    </main>
  );
}
