import './App.css';
import {useEffect, useState} from 'react';


function App() {

  let [birthdate,setbirthdate]=useState("");
  let [todaydate,settodaydate]=useState("");
  let [name,setname]=useState("");

  useEffect(() => {
    const todaydate = new Date();
    const formattedDate = todaydate.toISOString().split('T')[0];
    settodaydate(formattedDate);
  },[]);

  let [age,setage]=useState({
    milisecoud:0,
    secound:0,
    minutes:0,
    hours:0,
    day:0,
    week:0,
    month:0,
    year:0,
  
  });

 

  const calculteage=()=>{
    const birth =new Date(birthdate);
    const nowdate =new Date(todaydate);

    const milisecoud=nowdate-birth;
    const secound=Math.round(milisecoud/1000);
    const minutes=Math.round(secound/60);
    const hours=Math.round(minutes/60);
    const day=Math.round(hours/24);
    const week=Math.round(day/7);
    const month=Math.round(week*0.229984);
    const year=Math.round(month/12);


    if(name==="")
    {
      alert('plz Enter Your Name');
    }else
    {
      setage({milisecoud,secound,minutes,hours,day,week,month,year})
    }

  }

  return (
    <div className="App">
      
      <div className="allinput">
          Name:<input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}></input>
          Date of Birth:<input type="date" value={birthdate} onChange={(e)=>{setbirthdate(e.target.value)}}></input>
          Today Date:<input type="date" value={todaydate} onChange={(e)=>{settodaydate(e.target.value)}}></input>
          <input type="button" value="calculte age" onClick={calculteage}></input>
      </div>
	
    <div className='allper'>
        <p>MILISECONDS::<span>{age.milisecoud}</span></p>
        <p>SECONDS::<span>{age.secound}</span></p>
        <p>MINUTES::<span>{age.minutes}</span></p>
        <p>HOURS::<span>{age.hours}</span></p>
        <p>DAY::<span>{age.day}</span></p>
        <p>WEEK::<span>{age.week}</span></p>
        <p>MONTH::<span>{age.month}</span></p>
        <p>YEAR::<span>{age.year}</span></p>    
    </div>
		
    </div>
  );
}

export default App;
