import '../styles/Header.css';
import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';

export default function Header() {
    return (
        <div className="header raised-card">
            tic-tac-toe
            <a href="https://github.com/Angoooose/tic-tac-toe">
                <img className="header-img" src={githubLogo}></img>
            </a>
        </div>
    );
}