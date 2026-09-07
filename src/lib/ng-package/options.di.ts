import { InjectionToken, Provider, ValueProvider } from 'injection-js';
import { NgPackagrOptions, normalizeOptions } from './options';

export const OPTIONS_TOKEN = new InjectionToken<NgPackagrOptions>(`ng.v5.options`);

export const provideOptions = (options: NgPackagrOptions = {}): ValueProvider => ({
  provide: OPTIONS_TOKEN,
  useValue: normalizeOptions(options),
});

export const DEFAULT_OPTIONS_PROVIDER: Provider = provideOptions();
