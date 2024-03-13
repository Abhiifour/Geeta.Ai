import { useState } from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import axios from "axios";
import { Skeleton } from "../components/ui/skeleton"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";


import Typewriter from './Typewriter.js';




 function InputWithButton() {
  
  const [ans , setAns] = useState("");
  const[query , setQuery] = useState("");
  var config = { headers: {  
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}
}
 

  const handleChange = (e) =>{
    setQuery(e.target.value)
  }
   
  const submit = async () =>{
    

   await axios.post('http://127.0.0.1:8000/api',{
    query,
    config
    })
      .then(response => {
        console.log(response.data);
        setAns(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }




  return (
    <div className="flex w-full max-w-sm items-center space-x-2 flex-col gap-y-5">
      <Input type="text" placeholder="Ask Me Anything !" className="w-full h-12" onChange={handleChange} />
      <Button type="submit"  className="px-6" onClick={submit} >Ask</Button>
      <Card className="w-[500px] mt-10">
        <CardHeader>
          <CardTitle>
          <CardDescription className ="text-base font-normal font-serif ">
        {  ans ?
           ans :
          ( <div className="null">
          <Skeleton className="w-[420px] h-[20px] rounded-xl mb-2" />
          <Skeleton className="w-[410px] h-[18px] rounded-xl mb-2" />
          <Skeleton className="w-[400px] h-[16px] rounded-xl " />
           </div>)
        }
          </CardDescription>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default InputWithButton;