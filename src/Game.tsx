import {type ChangeEvent, useState} from 'react'
import './App.css'

const wordsToImages: Record<string, string> = {
    apple: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    cat: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    dog: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
};


const Game: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [correctWord, setCorrectWord] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toLowerCase();
        setInput(val);
        if (wordsToImages[val]) {
            setCorrectWord(val);
        } else {
            setCorrectWord(null);
        }
    };

    return (
        <div style={{textAlign: "center", marginTop: 50}}>
            <h2>Введите слово (apple, cat, dog)</h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Введите слово"
                style={{padding: 10, fontSize: 16}}
            />
            <div style={{marginTop: 20}}>
                {correctWord ? (
                    <img
                        src={wordsToImages[correctWord]}
                        alt={correctWord}
                        style={{width: 300, height: "auto", borderRadius: 10}}
                    />
                ) : (
                    input && <p>Неверное слово, попробуйте еще.</p>
                )}
            </div>
        </div>
    );
};

export default Game
