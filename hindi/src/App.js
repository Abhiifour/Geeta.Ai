
import './App.css';

import Form from './pages/Form';


import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"


function App() {


  
  return (
  <>
    <div className="App flex justify-center relative">
     <div className="box  h-96 flex justify-center align-center mt-40 flex-col gap-y-10 w-96 ">
     <div className="heading font-serif text-4xl ">
      Geeta.Ai
     </div>
     <Form/>
     
     </div>
   
    </div>
     

    </>
  );
}

export default App;
