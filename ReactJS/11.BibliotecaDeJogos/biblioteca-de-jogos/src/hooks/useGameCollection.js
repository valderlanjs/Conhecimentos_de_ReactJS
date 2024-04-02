import  { useState } from 'react';

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib")
        if (!storedGames) return []
        return JSON.parse(storedGames)
     
      })
      //adicione o game no estado de games
      const addGame = ({ title, cover }) => {
        //identificar unico para cada game
        const id = Math.floor(Math.random() * 1000000)
        const game = { id, title, cover }
        /* Aqui ele salva tanto no localStorage para que quando 
        a pagina for recarregada, os games ainda estejam 
        lá e também salvando no state para que a pagina 
        seja atualizada com o novo game*/
        setGames(state =>{
          const newState = [...state, game]
          localStorage.setItem("obc-game-lib", JSON.stringify(newState))
          return newState
        })
      }
    
      const removeGame = (id) => {
        setGames(state => {
          const newState = state.filter(game => game.id !== id)
          localStorage.setItem("obc-game-lib", JSON.stringify(newState))
          return newState
        })
      }

      return { games, addGame, removeGame}
}