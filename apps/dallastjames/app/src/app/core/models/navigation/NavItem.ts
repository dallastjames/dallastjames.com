export interface NavItemModel {
    label: string;
    route: string;
}

export class NavItem {
    public label: string = '';
    public route: string = '';

    constructor(params?: Partial<NavItemModel>) {
        if (!!params) {
            this.label = params.label || this.label;
            this.route = params.route || this.route;
        }
    }
}
