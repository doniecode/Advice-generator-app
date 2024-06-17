const advice=document.querySelector(".advice-text");
const adviceid=document.querySelector(".card-id");
const diceButton=document.querySelector(".dice-wrapper");

getData();
async function getData(){
  try{
    const response = await fetch("https://api.adviceslip.com/advice");
    if(!response.ok){
      throw new Error("sorry, could not fetch resource");
    }
    const data = await response.json();
    console.log(data);
    
    advice.textContent = '"'+data.slip.advice +'"';
    adviceid.textContent = "#"+data.slip.id;
  }
  catch(error){
    console.error("error");
  }
}