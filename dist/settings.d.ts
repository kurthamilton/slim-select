import { Option } from './store';
export default class Settings {
    id: string;
    style: string;
    class: string[];
    isMultiple: boolean;
    isAjax: boolean;
    isOpen: boolean;
    isAddable: boolean;
    isSearching: boolean;
    isEnabled: boolean;
    showSearch: boolean;
    searchPlaceholder: string;
    searchText: string;
    searchingText: string;
    searchFocus: boolean;
    searchHighlight: boolean;
    searchFilter: (opt: Option, search: string) => boolean;
    closeOnSelect: boolean;
    contentPosition: string;
    placeholderText: string;
    allowDeselect: boolean;
    allowDeselectOption: boolean;
    hideSelectedOption: boolean;
    deselectLabel: string;
    valuesUseText: boolean;
    showOptionTooltips: boolean;
    selectByGroup: boolean;
    limit: number;
    timeoutDelay: number;
    addToBody: boolean;
    constructor(settings?: Partial<Settings>);
}