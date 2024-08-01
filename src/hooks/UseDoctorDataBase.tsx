import { useSelector } from 'react-redux';

interface Doctor {
    id: string;
    name: string;
    avatar: string;
    workExp: number;
    profile: string;
}

interface RootState {
    docsLengthStore: {
        value: Doctor[];
    };
}

export const UseDoctorDataBaseHook = () => {
    const docDb = useSelector((state: RootState) => state.docsLengthStore.value);

  return { docDb }
  
}
