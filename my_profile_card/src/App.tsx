import './index.css'
import ProfileCard from './component/ProfileCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ProfileCard
        fullName="Pendo Vestine"
        title="Full Stack Developer"
        description="Passionate about empowering girls and women through technology and creating impactful digital solutions."
      />
    </div>
  )
}

export default App
