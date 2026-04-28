import React, { createContext, useState } from "react";
import { AuthContextType, PropCard } from "../global/Props";

export const AuthContextList = createContext<AuthContextType>({
    taskList: [],
    handleDelete: () => {},
    handleEdit: () => {},
    filter: () => {},
} as AuthContextType);

export const AuthProviderList = (props) => {
    const [taskList, setTaskList] = useState<PropCard[]>([]);

    const handleDelete = (item: PropCard) => {
        setTaskList(taskList.filter(task => task.item !== item.item));
    };

    const handleEdit = (item: PropCard) => {
        console.log('Editing:', item);
    };

    const filter = (text: string) => {
        console.log('Filtering:', text);
    };

    return (
        <AuthContextList.Provider 
            value={{ 
                taskList, 
                handleDelete, 
                handleEdit, 
                filter,
                onOpen: undefined as any,
                taskListBackup: []
            }}
        >
            {props.children}
        </AuthContextList.Provider>
    );
};
