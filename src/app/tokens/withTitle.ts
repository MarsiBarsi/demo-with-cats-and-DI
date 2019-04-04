import { InjectionToken } from '@angular/core';
import { IWithTitle } from '../interfaces/withTitles';

export const WITH_TITLE_TOKEN = new InjectionToken<IWithTitle>('С названием');
