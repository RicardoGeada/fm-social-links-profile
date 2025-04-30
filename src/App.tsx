import './App.scss';
import ProfileCard from './components/Card/ProfileCard';
import avatar from "./assets/images/avatar-jessica.jpeg";

function App() {
  
  return (
    <main>
      <h1 className='sr-only'>Social links profile</h1>
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
    </main>
  )
}

export default App
