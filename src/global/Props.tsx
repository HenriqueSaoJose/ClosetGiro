
export interface AuthContextType {
    taskList:Array<PropCard>,
    onOpen:void,
	handleEdit:Function,
	handleDelete:Function,
	taskListBackup:Array<PropCard>,
	filter: (t: string) => void
}

export type PropCard = {
    Cliente: string, 
	item: number, 
	timeLimit:string,
	title: string,
	description?: string,
	flag?: string
}