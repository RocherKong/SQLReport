interface Bloodhound {
    new (options);
    tokenizers: any;
    initialize();
    ttAdapter();
}
declare let Bloodhound: Bloodhound;