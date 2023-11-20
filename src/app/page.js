import Banner from "./components/banner/banner.component";
import Capsulte from "./components/capsule/capsule.component";
import RocketList from "./components/rocket-list/rocket-list.component";
import { RocketProvider } from "./context/rocket.context.component";
export default function Home() {
  return (
    <main className="home">
      {<Banner />}
      {<Capsulte />}
      {
        <RocketProvider>
          <RocketList title="Rockets"/>
        </RocketProvider>
      }
    </main>
  )
}
