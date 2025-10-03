import './index.css'
import ProfileCard from './component/ProfileCard'

function App() {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pendo-vestine-0a1740295',
      icon: 'linkedin', 
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/@PendoVestine',
      icon: 'twitter',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/',
      icon: 'github',
    },
    {
      platform: 'Email',
      url: 'mailto:pendovestine@gmail.com',
      icon: 'email',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <ProfileCard
        fullName="Pendo Vestine"
        title="Full Stack Developer"
        description="Passionate about empowering girls and women through technology and creating impactful digital solutions that make a difference."
        location="Kigali, Rwanda"
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default App
