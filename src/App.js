import './App.css';
import nodeEmoji from 'node-emoji';
import { useState } from 'react';

function App() {
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiName, setEmojiName] = useState('');

  return (
    <div>
      <h1>Random Emoji Generator</h1>
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 80,
          border: '1px solid purple',
          borderRadius: 25,
        }}
      >
        {emoji}
      </div>

      <button
        onClick={() => {
          const newEmoji = nodeEmoji.random().emoji;
          setEmoji(newEmoji);
        }}
      >
        Generate
      </button>

      <br />
      <br />

      {/* Controlled component */}
      <input
        // 2. Use state variable
        value={emojiName}
        // 3. Update the state variable
        onChange={(event) => {
          setEmojiName(event.currentTarget.value);

          const chosenEmoji = nodeEmoji.find(event.currentTarget.value)?.emoji;
          if (chosenEmoji) {
            setEmoji(chosenEmoji);
          }
        }}
      />

      {
        // Did the user type something in the box?
        emojiName &&
          // Was an emoji NOT found
          !nodeEmoji.hasEmoji(emojiName) &&
          // If both of these things are true, then show this message:
          'Emoji not found'
      }

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
