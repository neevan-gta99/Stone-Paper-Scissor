import { useEffect, useState } from 'react'


function App() {

  setInterval(() => {
    let heading = document.querySelector("#rock");
    heading?.classList.add("shaked-vertical");
  }, 500);
  setInterval(() => {
    let heading = document.querySelector("#paper");
    heading?.classList.add("shaked-vertical");
  }, 800);
  setInterval(() => {
    let heading = document.querySelector("#scissor");
    heading?.classList.add("shaked-vertical");
  }, 900);



  type Sign = "Stone" | "Paper" | "Scissor" | "";
  const [sign, setSign] = useState<Sign>("");
  const [stone, setStone] = useState("");
  const [paper, setPaper] = useState("");
  const [scissor, setScissor] = useState("");

  const [gameActive, setGameActive] = useState(false);
  const [winnerFlag, setWinnerFlag] = useState(false);
  const [drawFlag, setDrawFlag] = useState(false);
  const [stoneChoosed, setStoneChoosed] = useState(false);
  const [aiStoneChoosed, setAiStoneChoosed] = useState(false);


  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const toggleStone = () => {
    const Stone1 = document.querySelector("#stone1");
    const Paper1 = document.querySelector("#paper1");
    const Scissor1 = document.querySelector("#scissor1");
    Stone1?.classList.remove("img-hide");
    Paper1?.classList.add("img-hide")
    Scissor1?.classList.add("img-hide")
    if (stoneChoosed) {
      console.log("Choosed");
      
      Stone1?.classList.add("stop-moving");
      Stone1?.classList.remove("moving");
    }
    else {
      console.log("Not Choosed");

      Stone1?.classList.remove("stop-moving");
      Stone1?.classList.add("moving");
    }
  }

  const toggleStone2 = () => {

    const Stone2 = document.querySelector("#stone2");
    const Paper2 = document.querySelector("#paper2");
    const Scissor2 = document.querySelector("#scissor2");
    Stone2?.classList.remove("img-hide");
    Paper2?.classList.add("img-hide")
    Scissor2?.classList.add("img-hide")

    if (aiStoneChoosed) {

      Stone2?.classList.add("stop-moving");
      Stone2?.classList.remove("moving");
    }
    else {
      Stone2?.classList.remove("stop-moving");
      Stone2?.classList.add("moving");
    }
  }

  useEffect(()=>{
    toggleStone();
  },[stoneChoosed])

  useEffect(()=>{
    toggleStone2();
  },[aiStoneChoosed])

  const paperChoosedByMe = () => {
    const Stone1 = document.querySelector("#stone1");
    Stone1?.classList.add("img-hide");
    let Paper1 = document.querySelector("#paper1");
    Paper1?.classList.remove("img-hide");
  }

  const scissorChoosedByMe = () => {
    const Stone1 = document.querySelector("#stone1");
    Stone1?.classList.add("img-hide");
    let Scissor1 = document.querySelector("#scissor1");
    Scissor1?.classList.remove("img-hide");
  }

  const aiChoosedPaper = () => {
    const Stone2 = document.querySelector("#stone2");
    const Paper2 = document.querySelector("#paper2");
    Stone2?.classList.add("img-hide");
    Paper2?.classList.remove("img-hide");
  }

  const aiChoosedScissor = () => {
    const Scissor2 = document.querySelector("#scissor2");
    const Stone2 = document.querySelector("#stone2");
    Stone2?.classList.add("img-hide");
    Scissor2?.classList.remove("img-hide");
  }


  const stoneBtn = () => {
    console.log("Stone button Clicked");
    setStoneChoosed(true);
    setWinnerFlag(false);
    setDrawFlag(false);
    setGameActive(true)
    setStone("Stone");
    setIsDisabled(true);
  }

  const paperBtn = () => {
    console.log("Paper button Clicked");
    setWinnerFlag(false);
    setDrawFlag(false);
    setGameActive(true);
    paperChoosedByMe();
    setPaper("Paper");
    setIsDisabled(true);

  }

  const scissorBtn = () => {
    console.log("Scissor button Clicked");
    setWinnerFlag(false);
    setDrawFlag(false);
    setGameActive(true);
    scissorChoosedByMe();
    setScissor("Scissor");
    setIsDisabled(true);
  }


  const genrateRandom = () => {

    console.log("generateRandom");

    setTimeout(() => {
      let num = Math.floor(Math.random() * 90) + 1;

      if (num >= 1 && num <= 30) {
        console.log(num, "Stone");
        setAiStoneChoosed(true);
        setSign("Stone");
      }
      else if (num > 30 && num <= 60) {
        console.log(num, "paper");
        aiChoosedPaper();
        setSign("Paper");
      }
      else if (num > 60 && num <= 90) {
        console.log(num, "Scissor");
        aiChoosedScissor();
        setSign("Scissor");
      }


    }, 10);

  }

  useEffect(() => {

    console.log("Paper State Changed: ", paper);

    if (!winnerFlag && !drawFlag && gameActive) {
      genrateRandom();
    }

  }, [stone, paper, scissor])

  const checkWinFn = () => {

    if (sign != "") {

      setTimeout(() => {

        if (sign === stone || sign === paper || sign === scissor) {
          draw()
        }
        else if (stone != "") {

          if (sign === "Scissor") {
            winner("You")
          }
          else {
            winner("AI")
          }

        }
        else if (paper != "") {

          if (sign === "Stone") {
            winner("You")
          }
          else {
            winner("AI")
          }

        }
        else if (scissor != "") {

          if (sign === "Paper") {
            winner("You")
          }
          else {
            winner("AI")
          }

        }

        console.log("Winnner");
      }, 2000);
    }

  }

  useEffect(() => {
    if (!winnerFlag && !drawFlag && gameActive) {
      checkWinFn();
    }
  }, [sign])


  const winner = (win: string) => {
    alert(win + " Winner");
    if(stoneChoosed){
      setStoneChoosed(false);
    }
    else{
      toggleStone()
    }
    if(aiStoneChoosed){
      setAiStoneChoosed(false);
    }
    else{
      toggleStone2();
    }
    setWinnerFlag(true);
    setDrawFlag(true);
    setGameActive(false);
    setIsDisabled(false);
    setStone("");
    setPaper("");
    setScissor("");
    setSign("");
  }

  const draw = () => {
    alert("Match Draw");
    if(stoneChoosed){
      setStoneChoosed(false);
    }
    else{
      toggleStone()
    }
    if(aiStoneChoosed){
      setAiStoneChoosed(false);
    }
    else{
      toggleStone2();
    }
    setWinnerFlag(true);
    setDrawFlag(true);
    setGameActive(false);
    setIsDisabled(false);
    setStone("");
    setPaper("");
    setScissor("");
    setSign("");
  }

  // Rock Paper Scissor
  return (
    <>


      <div className='main-div'>


        <div className='main-head'>
          <h1 id="rock">ROCK</h1>
          <h1 id="paper">PAPER</h1>
          <h1 id="scissor">SCISSOR</h1>
        </div>

        <div className='image-wrapper'>
          <img id="stone1" src="assets/StoneImg.png" alt="" className="moving" />
          <img id="paper1" src="assets/PaperImg.png" alt="" className="stop-moving img-hide" />
          <img id="scissor1" src="assets/ScissorImg.png" alt="" className="stop-moving img-hide" />

          <img id="stone2" src="assets/StoneImg.png" alt="" className="moving" />
          <img id="paper2" src="assets/PaperImg.png" alt="" className="stop-moving img-hide" />
          <img id="scissor2" src="assets/ScissorImg.png" alt="" className="stop-moving img-hide" />
        </div>


        <div className='btns'>
          <div className='controls'>
            <h4 className='choose'>Choose Sign</h4>
            <div className='game-btns'>
              <button disabled={isDisabled} className="game-btn common-btns" onClick={stoneBtn}>Rock</button>
              <button disabled={isDisabled} className="game-btn common-btns" onClick={paperBtn} >Paper</button>
              <button disabled={isDisabled} className="game-btn common-btns" onClick={scissorBtn} >Scissor</button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
