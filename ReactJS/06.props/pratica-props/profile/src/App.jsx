import Profile from "./components/profile";


export default function App() {
  return (
    <div className="app">
      <Profile
        avatar= "https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="I'm a software engineer"
        phone="123456789"
        email="john.doe@email.com"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twiterUrl="https://twiter.com"
      />
    </div>
  )
}