import './App.css';
import Card from './card';
import Heading from './heading';
import Data from './data'
import StartingSection from './StatingSection';

function App() {
  return (
    <>
      <Heading name='Top-5 BGMI Youtubers '/>
      <StartingSection />
      
    
   <div className="App">
        
        {Data.map(Data => (
          <Card
            image={Data.image}
            name={Data.name}
            des={Data.des}
            link={Data.link} />
        ))}
      </div>
    </>

  );
}

export default App;
