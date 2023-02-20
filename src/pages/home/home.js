import Header from "../../components/Home/header";
import Invite from "../../components/Home/invite";
import Places from "../../components/Home/places";
import Plus from "../../components/Home/plus";
import Navbar from "../../components/layout/navbar";


export default function Home() {
  return (
    <div>
        <Header />
        <Invite />
        <Places/>
        <Plus/>
    </div>
  )
}
