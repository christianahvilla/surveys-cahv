// import { createContext, useCallback, useContext, useMemo } from 'react';

// import { useLocalStorage } from './useLocalStorage';
// import { AuthContextType, UserAuthData } from '~types/context/auth-object.type';

// const AuthContext = createContext<AuthContextType>(null!);

// export const AuthProvider = ({
//   storedAuthData,
//   children,
// }: {
//   children: React.ReactNode;
//   storedAuthData: any;
// }) => {
//   const [authData, setAuthData] = useLocalStorage('authData', storedAuthData);

//   const login: AuthContextType['login'] = useCallback(
//     async (authData: UserAuthData, callback?: VoidFunction) => {
//       setAuthData(authData);
//       callback && callback();
//     },
//     [setAuthData],
//   );

//   const logout: AuthContextType['logout'] = useCallback(
//     async (callback?: VoidFunction) => {
//       setAuthData(null);
//       if (callback) callback();
//     },
//     [setAuthData],
//   );

//   const value = useMemo(
//     () => ({
//       authData,
//       login,
//       logout,
//     }),
//     [authData, login, logout],
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
