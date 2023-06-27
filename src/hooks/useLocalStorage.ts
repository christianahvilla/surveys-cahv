// import { useState } from 'react';

// const APP_NAMESPACE = 'virality';

// export const useLocalStorage = (keyName: string, defaultValue: any) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const value = getFromLocalStorage(keyName);

//       if (value) return value;
//       else {
//         window.localStorage.setItem(`${APP_NAMESPACE}:${keyName}`, JSON.stringify(defaultValue));
//         return defaultValue;
//       }
//     } catch (err) {
//       return defaultValue;
//     }
//   });

//   const setValue = (newValue: any) => {
//     try {
//       window.localStorage.setItem(
//         `${import.meta.env.VITE_APP_NAMESPACE}:${keyName}`,
//         JSON.stringify(newValue),
//       );
//       setStoredValue(newValue);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return [storedValue, setValue];
// };
