import { useSelector } from 'react-redux'

interface RootState{
    triggerStore:{
        value: boolean;
    }
}

export const UseTriggerHook = () => {
    const activateTrigger = useSelector((state:RootState) => state.triggerStore.value)
    return { activateTrigger }
}
