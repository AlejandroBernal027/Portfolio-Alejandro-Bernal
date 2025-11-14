import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import indiecoveImg from './assets/Indiecove.png';
import DrinksnDicesImg from './assets/drinksndices.png';
import GmailImg from './assets/Gmail Logo.png';
import GithubImg from './assets/GitHub.png';
import LinkedInImg from './assets/LinkedIn.png';
import TelefonoImg from './assets/Phone.png';
import FigmaImg from './assets/Figma.png';
import CopyImg from './assets/Clipboard.png';
import './App.css'

function Home() {
  return <div id='landingPage'>
    <h1>Soy Alejandro Bernal Ortiz, un desarrollador web e ingeniero de datos junior.</h1> 
    <h2>Me considero una persona que le gusta aprender y ayudar a las personas, trabajo bien en equipo y no me resulta dificil adaptarme a usar diferentes tecnologías de desarrollo web, inteligencia artificial, ingeniería de datos o análisis de datos.</h2>
    <h2>Mis titulaciones académicas son:</h2>
    <ul>
      <li>Tecnico Superior en Desarrollo de Aplicaciones Web, en I.E.S. Fernando Aguilar Quignon</li>
      <li>Especialización en Inteligencia Artificial y Big Data, en I.E.S. Fernando Aguilar Quignon</li>
    </ul>
  </div>
}

function Contact() {
  const copiarTexto = async (e) => {
    if (e.target.id == "copiarEmail" || e.target.id == "copiarTelefono") {
      let texto = ""
      if (e.target.id == "copiarEmail") {
        texto = document.getElementById("email").innerText
      } else if (e.target.id == "copiarTelefono") {
        texto = document.getElementById("telefono").innerText
      }
      
      try {
          await window.navigator.clipboard.writeText(texto);
          alert("¡Copiado al portapapeles!");
      } catch (err) {
          console.error(
              "No se ha podido copiar al portapapeles.",
              err
          );
          alert("Ha habido un fallo al copiar al portapapeles.");
      }
    }
  };

  return <div id='infoContacto'>
    <span><img src={GmailImg} alt="email" className='imgContacto'/><h2 id="email">aleberort@gmail.com</h2><img src={CopyImg} alt="copiar" className='copiar' id='copiarEmail' onClick={copiarTexto}/></span>
    <span><img src={LinkedInImg} alt="linkedin" className='imgContacto'/><h2><a href='https://www.linkedin.com/in/alejandro-bernal-ortiz-1243022a0' target='_blank'>Alejandro Bernal Ortiz</a></h2></span>
    <span><img src={GithubImg} alt="github" className='imgContacto'/><h2><a href='https://github.com/AlejandroBernal027' target='_blank'>AlejandroBernal027</a></h2></span>
    <span><img src={TelefonoImg} alt="telefono" className='imgContacto'/><h2 id="telefono">+34 622 06 48 50</h2><img src={CopyImg} alt="copiar" className='copiar' id='copiarTelefono' onClick={copiarTexto}/></span>
  </div>;
}

function Indiecove() {
  return <div id='indiecoveContent'>
    <div id='indiecoveHeader'>
      <h1>IndieCove</h1>
      <a href="https://github.com/AlejandroBernal027/Portfolio-Alejandro-Bernal/tree/main/Aplicaciones%20Web/IndieCove" title='Enlace a Github' target='_blank'><img src={GithubImg} alt="Enlace a Github" /></a>
      <a href="https://www.figma.com/design/TryuxuEIkyrfE0I0ShqNYc/IndieCove?node-id=52-5097&node-type=CANVAS&t=iPVecWpfZ24AAGaH-0" title='Enlace a Figma' target='_blank'><img src={FigmaImg} alt="Enlace a Figma" /></a>
    </div>
    <div>
      <div id="indiecoveInfo">
        <h2>Este es mi proyecto de fin de curso, un ecommerce donde se pueden comprar videojuegos independientes.</h2>
        <h2>Los jugadores pueden comprar y dejar valoraciones a los juegos, los desarrolladores pueden publicar juegos y los administradores son capaces de administrar a otros usuarios.</h2>
      </div>
      <div id="indiecoveMainContent">
        <div id="indiecoveImg">
          <span>
            <p>Página de inicio</p>
          </span>
          <img src={indiecoveImg} alt="IndieCove"/>
        </div>
        <div id="indiecoveTecnologias">
          <h2>Tecnologías usadas</h2>
          <div id='indiecoveFront'>
            <h3>Front-End:</h3>
            <p>Angular 17 con las siguientes librerías:</p>
            <ul>
              <li>Angular Material</li>
              <li>ngx-file-drop</li>
            </ul>
          </div>
          <div id='indiecoveBack'>
            <h3>Back-End:</h3>
            <p>PHP y Symfony con:</p>
            <ul>
              <li>DoctrineDBAL para acceder a la base de datos</li>
              <li>Composer para poder usar Symfony</li>
            </ul>
          </div>
          <div id='indiecoveBBDD'>
            <h3>Base de datos:</h3>
            <p>MariaDB y MySQL.</p>
          </div>
          <div id='indiecoveExtra'>
            <h3>Tecnologías adicionales</h3>
            <p>Docker para contener la base de datos y el Back-End</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function DrinksAndDices() {
  return <div>
    <div id='DnDHeader'>
      <h1>Drinks & Dices</h1>
      <a href="https://github.com/AlejandroBernal027/Portfolio-Alejandro-Bernal/tree/main/Diseños/Drinks%20%26%20Dices" title='Enlace a Github' target='_blank'><img src={GithubImg} alt="Enlace a Github" /></a>
      <a href="https://www.figma.com/design/CRJQ5kY894idK8KlVZ2p9X/Guía-de-estilos?node-id=35-2&node-type=CANVAS&t=m9JDA7BddNfdW5Hu-0" title='Enlace a Figma' target='_blank'><img src={FigmaImg} alt="Enlace a Figma" /></a>
    </div>
    <div id='DnDContent'>
      <div id="DnDInfo">
        <h2>Este es un proyecto de empresa que realicé para la asignatura Empresa e Iniciativa Emprendedora durante el grado superior de desarrollo de aplicaciones web. No es una aplicación web, solo hice el diseño de como sería la aplicación web.</h2>
        <h2>La idea de la empresa era tener un bar de copas donde los clientes pudieran disfrutar de una variedad de juegos de mesa o de rol mientras bebían.</h2>
      </div>
      <div id='DnDImg'>
        <span>
          <p>Página de inicio</p>
        </span>
        <img src={DrinksnDicesImg} alt="Drinks and Dices"/>
      </div>
    </div>
  </div>
}

function Portfolio() {
  return <div>
    <div id='portfolioHeader'>
      <h1>Portfolio</h1>
      <a href="https://github.com/AlejandroBernal027/Portfolio-Alejandro-Bernal/tree/main/Aplicaciones%20Web/portfolio" title='Enlace a Github' target='_blank'><img src={GithubImg} alt="Enlace a Github" /></a>
      <a href="https://www.figma.com/design/NKhIZTxr9hrpN7z03Flmvj/Portfolio?node-id=32-175&t=BduPZH9qF9HvR8IX-0" title='Enlace a Figma' target='_blank'><img src={FigmaImg} alt="Enlace a Figma" /></a>
    </div>
    <div id='portfolioContent'>
      <div id="portfolioInfo">
        <h2>Este proyecto es la aplicación que esta viendo, para hacer esta aplicación he utilizado ReactJS con Vite.</h2>
        <h2>Se me ocurrió la idea de hacer una aplicación web para hacer más sencillo y accesible poder mirar los diferentes proyectos que he hecho para personas que no saben manejarse con Github.</h2>
      </div>
    </div>
  </div>
}

function reveal() {
  const div = document.getElementById("proyectoLinks")
  div.style.visibility = "visible"
  div.classList.remove("slideOut")
  div.classList.add("slideIn")
}

function hide() {
  const div = document.getElementById("proyectoLinks")
  const indiecove = document.getElementById("indiecove")
  const drinksndices = document.getElementById("drinksndices")
  const portfolio = document.getElementById("portfolio")
  const triangulos = document.getElementsByClassName("triangle")
  
  div.classList.remove("slideIn")
  div.classList.add("slideOut")
  indiecove.classList.add("notSelected")
  drinksndices.classList.add("notSelected")
  portfolio.classList.add("notSelected")
  
  for (const triangulo of triangulos) {
    triangulo.classList.add("triangleNotSelected")
  }
  
  setTimeout(() => {div.style.visibility = "hidden"}, 500)
}

function SelectPagina() {    
    window.onclick = e => {
      const inicio = document.getElementById("inicio")
      const proyectos = document.getElementById("proyectos")
      const contacto = document.getElementById("contacto")
      
      if (e.target.id == "inicio" || e.target.id == "proyectos" || e.target.id == "contacto") {
        inicio.classList.add("notSelected")
        proyectos.classList.add("notSelected")
        contacto.classList.add("notSelected")
        
        if (e.target.id == "inicio") {
          hide()
          inicio.classList.remove("notSelected")
          
        } else if (e.target.id == "proyectos") {
          reveal()
          proyectos.classList.remove("notSelected")
        
        } else if (e.target.id == "contacto") {
          hide()
          contacto.classList.remove("notSelected")
        }
      }
    }
  }

function App() {

  const [theme, setTheme] = useState("light");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const SelectProyecto = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);

    window.onclick = e => {
      const indiecove = document.getElementById("indiecove")
      const drinksndices = document.getElementById("drinksndices")
      const portfolio = document.getElementById("portfolio")
      const triangulos = document.getElementsByClassName("triangle")

      if (e.target.id == "indiecove" || e.target.id == "portfolio" || e.target.id == "drinksndices") {
        indiecove.classList.add("notSelected")
        drinksndices.classList.add("notSelected")
        portfolio.classList.add("notSelected")
        
        for (const triangulo of triangulos) {
          triangulo.classList.add("triangleNotSelected")
        }
    
        if (e.target.id == "indiecove") { 
          indiecove.classList.remove("notSelected")
          triangulos[0].classList.remove("triangleNotSelected")

        } else if (e.target.id == "drinksndices") { 
          drinksndices.classList.remove("notSelected")
          triangulos[1].classList.remove("triangleNotSelected")

        } else if (e.target.id == "portfolio"){ 
          portfolio.classList.remove("notSelected")
          triangulos[2].classList.remove("triangleNotSelected")
        }
      }
    }
  };

  return (
    <>
    <main>
      <div id='staticElements'>
        <h1>Alejandro Bernal Ortiz</h1>
        <h2>Desarrollador web e ingeniero de datos</h2>
      </div>

      <div id='changingElements'>
        <BrowserRouter>
          <div id="links">
            <div id='navLinks'>
              <nav>
                <Link to="/" onClick={SelectPagina} id="inicio">Inicio</Link>{"\n "}
              </nav>
              <nav>
                <Link to='/proyectos' onClick={SelectPagina} id="proyectos" className="notSelected">Proyectos</Link>{"\n "}
              </nav>
              <nav>
                <Link to="/contacto" onClick={SelectPagina} id="contacto" className="notSelected">Contacto</Link>
              </nav>
            </div>
            <div id='proyectoLinks'>
              <nav>
                <Link to="/proyectos/IndieCove" id="indiecove" onClick={SelectProyecto} className='notSelected'>IndieCove</Link>{"\n "}
                <div className="triangle triangleNotSelected"></div>
              </nav>
              <nav>
                <Link to="/proyectos/DrinksAndDices" id="drinksndices" onClick={SelectProyecto} className='notSelected'>Drinks & Dices</Link>{"\n "}
                <div className="triangle triangleNotSelected"></div>
              </nav>
              <nav>
                <Link to="/proyectos/Portfolio" id="portfolio" onClick={SelectProyecto} className='notSelected'>Portfolio</Link>
                <div className="triangle triangleNotSelected"></div>
              </nav>
            </div>
          </div>
          <div id='mainContent' className={`cuadro ${animate ? "animar" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/proyectos" element="" />
              <Route path="/proyectos/IndieCove" element={<Indiecove />} />
              <Route path="/proyectos/DrinksAndDices" element={<DrinksAndDices />} />
              <Route path="/proyectos/Portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>
    <footer>
      <label className="container">Claro
        <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={handleThemeChange}/>
        <span className="checkmark"></span>
      </label>
      <label className="container">Oscuro
        <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={handleThemeChange}/>
        <span className="checkmark"></span>
      </label>
      <label className="container">Blanco
        <input type="radio" name="theme" value="white" checked={theme === 'white'} onChange={handleThemeChange}/>
        <span className="checkmark"></span>
      </label>
      <label className="container">Negro
        <input type="radio" name="theme" value="black" checked={theme === 'black'} onChange={handleThemeChange}/>
        <span className="checkmark"></span>
      </label>
    </footer>
    </>
  )
}

export default App
