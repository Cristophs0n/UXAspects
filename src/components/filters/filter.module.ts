import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule } from '../../directives/menu-navigation/index';
import { TooltipModule } from '../tooltip/index';
import { TypeaheadModule } from '../typeahead/typeahead.module';
import { FilterBaseComponent } from './filter-base/filter-base.component';
import { FilterContainerComponent } from './filter-container.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { FilterDynamicComponent } from './filter-dynamic/filter-dynamic.component';
import { FilterTypeaheadHighlight } from './filter-dynamic/filter-typeahead-highlight.pipe';

const DECLARATIONS = [
    FilterBaseComponent,
    FilterContainerComponent,
    FilterDropdownComponent,
    FilterDynamicComponent,
    FilterTypeaheadHighlight
];

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TooltipModule,
        FormsModule,
        MenuNavigationModule,
        CommonModule,
        TypeaheadModule,
        A11yModule
    ],
    exports: DECLARATIONS,
    declarations: DECLARATIONS
})
export class FilterModule { }
