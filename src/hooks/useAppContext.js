import { useContext } from 'react';
import { Context } from '../store/context';

export const useAppContext = () => useContext(Context);