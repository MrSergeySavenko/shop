export interface IDataInfo {
    id: string;
    name: string;
    cost: number;
    imgUrl: string;
    date: string;
}

export interface IDataEelement {
    title: string;
    info: Array<IDataInfo>;
}

export interface IData {
    notebook: IDataEelement;
    phone: IDataEelement;
    notepad: IDataEelement;
    headphone: IDataEelement;
}

export interface IDataDetails {
    name: string;
    imgUrl: string;
    colors: Array<string>;
    cost: number;
}

export interface IDataState {
    data: IData | null;
    modalData: IDataDetails | null;
    isLoading: boolean;
    modalLoading: boolean;
    isError: boolean;
    modalError: boolean;
    theme: boolean;
    modalActive: boolean;
}
