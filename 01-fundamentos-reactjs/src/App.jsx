import { Post } from './Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author= "Jaqueline Rodrigues" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis error culpa in. Facilis autem quia veritatis necessitatibus commodi optio cum iste, iusto, dicta tenetur nobis voluptas repudiandae velit reiciendis?"
          />
          <Post 
            author= "Diego Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis error culpa in. Facilis autem quia veritatis necessitatibus commodi optio cum iste, iusto, dicta tenetur nobis voluptas repudiandae velit reiciendis?"
          />
        </main>
      </div>

    </div>
  )
}

