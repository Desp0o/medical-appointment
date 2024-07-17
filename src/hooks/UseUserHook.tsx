import { useSelector } from 'react-redux'

interface RootState{
    userStore:{
        name: string;
        isAuthenticated: boolean;
    }
}

export const UseUserHook = () => {
    const user = useSelector((state:RootState) => state.userStore)
    return { user }
}
