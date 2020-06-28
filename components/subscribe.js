import React, { useRef, useState } from 'react';
import styles from './subscribe.module.css';


export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div>
      <div className={styles.subscribeCtaWrapper}>
        {/* <form onSubmit={subscribe}> */}
          <input
            id="email-input"
            name="email"
            placeholder="Email"
            ref={inputEl}
            type="email"
            className={styles.email}
          />
        {/* </form> */}
        <button type="submit" className={styles.subscribeButton} onClick={subscribe}>{'Subscribe'}</button>
      </div>
      <div>
          {message
            ? message
            : ``}
      </div>
    </div>
    
  );
}