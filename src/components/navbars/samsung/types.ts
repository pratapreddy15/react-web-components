export interface SubMenuItem {
    id: string;
    text: string;
}

export interface SubMenu {
    title?: string;
    list: SubMenuItem[];
}

export interface Menu {
    id: string;
    text: string;
    subMenus: SubMenu[][];
}