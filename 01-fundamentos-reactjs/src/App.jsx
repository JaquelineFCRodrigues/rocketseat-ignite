import { Post } from './Post';

export function App() {

  return (
    <div>
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

