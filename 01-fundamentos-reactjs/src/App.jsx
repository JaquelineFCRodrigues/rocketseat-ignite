import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author= "Jaqueline Rodrigues" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis error culpa in. Facilis autem quia veritatis necessitatibus commodi optio cum iste, iusto, dicta tenetur nobis voluptas repudiandae velit reiciendis?"
      />
      <Post 
        author= "Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis error culpa in. Facilis autem quia veritatis necessitatibus commodi optio cum iste, iusto, dicta tenetur nobis voluptas repudiandae velit reiciendis?"
      />
    </div>
  )
}

