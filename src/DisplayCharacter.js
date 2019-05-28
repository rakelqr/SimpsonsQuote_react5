import  React  from  'react';

const  DisplayCharacter = ({ character }) => {
    return (
        <div  className="DisplayCharacter">
            <img  src={character.image}  alt="Simpsons character"  />
            <ul>
                <li>character : {character.character}</li>
                <li>Quote : {character.quote}</li>
                <li>Character direction : {character.characterDirection}</li>
            </ul>
        </div>
    );
};

export  default  DisplayCharacter;