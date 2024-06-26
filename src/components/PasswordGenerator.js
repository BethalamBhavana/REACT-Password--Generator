import React, { useState } from 'react';
import './PasswordGenerator.css'; // Import the CSS file for styling

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '   0123456789';
    const specialChars = '  !@#$%^&*';

    let charset = '';
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSpecialChars) charset += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        A-Z
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        a-z
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        0-9
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
        />
        !@#$%^&*
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <p className="password-output">
        {password}
        <button onClick={copyToClipboard} className="copy-button">
          Copy
        </button>
      </p>
    </div>
  );
};

export default PasswordGenerator;
