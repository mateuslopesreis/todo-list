/* function App(){

    const [player, setPlayer] = useState<any>({
      name:"mateus",
      nickName:"lopes",
      score:10
    })
  
     const handleClick = ()=>{
      const newScore = player.score+1
      setPlayer({...player,score:newScore})
    } 
  
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>)=>{
      const newName = event.target.value
      const newPlayer = {...player, name:newName}
      setPlayer(newPlayer)
    }
  
    const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>)=>{
      const newNickName = event.target.value
  
      setPlayer({...player, nickName:newNickName})
    }
  
    return (
      <>
        <h1>Imutabilidade</h1>
        <h2>Dados do Jogador</h2>
        <p>
          <h3>Score:{player.score}</h3>
          <button onClick={handleClick}>+</button>
        </p>
        <p>
          <label>Player Name:
          <input type='text' name='name' onChange={handleChangeName} value={player.name}/>
          </label>
  
          <label>Player NickName:
          <input type='text' name='nickName' onChange={handleChangeNickName} value={player.nickName}/>
          </label>
        </p>
        <hr></hr>
        <h3>{player.name} | {player.nickName}</h3>
     </>   
    )
  }
   */