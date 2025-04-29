import './App.scss';
import ProfileCard from './components/Card/ProfileCard';
import avatar from "./assets/images/avatar-jessica.jpeg";

function App() {
  
  return (
    <>
      <ProfileCard 
        avatar={avatar}
        name='Jessica Randall'
        location='London, United Kingdom'
        bio='"Front-end developer and avid reader."'
        links={[
          {link: "#", name: "Github"},
          {link: "#", name: "Frontend Mentor"},
          {link: "#", name: "LinkedIn"},
          {link: "#", name: "Twitter"},
          {link: "#", name: "Instagram"},
        ]}
      />
    </>
  )
}

export default App
