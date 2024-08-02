import { useSelector } from 'react-redux';

interface RootState {
    updateDocStore: {
        avatar: string,
        name: string,
        profile: string,
        workExp: number,
        isFetched: boolean;
        docId:string;
    }
}

export const useFetchedDoctorHook = () => {
    const doctorForEdit = useSelector((state: RootState) => state.updateDocStore);

    return { doctorForEdit }
}
