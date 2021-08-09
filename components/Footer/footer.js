
import {faGithub, faLinkedin, faDev} from '@fortawesome/free-brands-svg-icons'
const Footer = () => (
  <footer className="bg-secondary">
    <div className="p-6 flex justify-center items-center">
      <ul className="flex gap-6">
        <li
          LinkedIn
          icon={faLinkedin}
        />
        <li
          Github
          icon={faGithub}
        />
      </ul>
    </div>
  </footer>
)

export default Footer