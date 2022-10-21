import appLogo from  '../assets/tetris.svg'
import './Title.css'

export const Title = () => {
  return (
    <div>
        <img src={appLogo} className="logo app" alt="Tetris logo" />
        Tetris App
    </div>
  )
}