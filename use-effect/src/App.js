import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let [notificationCount, setNotificationCount] = useState(0);
  useEffect(() => {
    if (notificationCount > 0) {
      document.title = `New Notification(${notificationCount})`;
    }
  }, [notificationCount]);
  const increaseNotificationCount = () => {
    setNotificationCount(notificationCount + 1);
  };
  return (
    <>
      <main>
        <button onClick={increaseNotificationCount}>
          Increase Notification Count in Title
        </button>
      </main>
    </>
  );
}

export default App;
