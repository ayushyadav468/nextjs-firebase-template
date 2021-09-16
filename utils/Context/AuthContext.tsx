import { createContext, useContext, ReactNode, useState } from 'react';

type authContextType = {
	user: boolean | null;
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
};

const authContextDefaultValues: authContextType = {
	user: null,
	isAuthenticated: false,
	login: () => {},
	logout: () => {}
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode;
};

export function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<boolean | null>(null);

	let isAuthenticated = false;

	const login = () => {
		setUser(true);
	};

	const logout = () => {
		setUser(false);
	};

	const value = {
		user,
		isAuthenticated,
		login,
		logout
	};

	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
}
