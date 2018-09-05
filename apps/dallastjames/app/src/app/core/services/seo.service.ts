import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(private _title: Title, private _meta: Meta) {}

    public setTitle(title: string): void {
        this._title.setTitle(title);
        const ogTitle: MetaDefinition = {
            name: 'og:title',
            content: title
        };
        this._meta.addTag(ogTitle);
    }

    public setDescription(desc: string): void {
        const def: MetaDefinition = {
            name: 'description',
            content: desc
        };
        const ogDef: MetaDefinition = {
            name: 'og:description',
            content: desc
        };
        this._meta.addTags([def, ogDef]);
    }
}
