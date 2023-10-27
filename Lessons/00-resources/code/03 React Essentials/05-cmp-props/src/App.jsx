import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import jsxUiImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import statesImg from './assets/state-mgmt.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept 
            title="JSX"
            description="JSX Rules."
            image={jsxUiImg}
            />
            <CoreConcept 
            title="Props"
            description="Props are cool."
            image={propsImg}
            />
            <CoreConcept 
            title="State"
            description="States work well."
            image={statesImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
