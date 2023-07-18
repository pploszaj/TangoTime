import { createContext } from "react";

interface UserContextInterface {
    userData: {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      role?: string;
    };
    updateUserData: (value: {}) => void;
  }

export const UserContext = createContext<UserContextInterface>({
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
  },
  updateUserData: () => {}
});
