import { Hct, SchemeExpressive, SchemeTonalSpot, argbFromHex, hexFromArgb } from '@material/material-color-utilities';

export type SchemeStyle = 'expressive' | 'tonal';
export type MonetOptions = { seed: string; dark: boolean; style: SchemeStyle };

const roles = [
  'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer', 'inversePrimary',
  'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer',
  'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer',
  'error', 'onError', 'errorContainer', 'onErrorContainer', 'background', 'onBackground',
  'surface', 'onSurface', 'surfaceVariant', 'onSurfaceVariant', 'outline', 'outlineVariant',
  'shadow', 'scrim', 'inverseSurface', 'inverseOnSurface', 'surfaceTint',
  'surfaceDim', 'surfaceBright', 'surfaceContainerLowest', 'surfaceContainerLow',
  'surfaceContainer', 'surfaceContainerHigh', 'surfaceContainerHighest',
] as const;

const hardware: Record<string, string> = {
  bay: '#6288cf', mint: '#718d78', porcelain: '#e8dfd2', lemon: '#a1a85a', hazel: '#83705a',
};

export class MonetEngine extends EventTarget {
  options: MonetOptions = { seed: hardware.bay, dark: false, style: 'expressive' };

  set(patch: Partial<MonetOptions>) {
    this.options = { ...this.options, ...patch };
    this.apply();
    this.dispatchEvent(new Event('change'));
  }

  apply() {
    const seed = this.options.seed.trim();
    if (!/^#[\da-f]{6}$/i.test(seed)) return;
    const source = Hct.fromInt(argbFromHex(seed));
    const scheme = this.options.style === 'expressive'
      ? new SchemeExpressive(source, this.options.dark, 0)
      : new SchemeTonalSpot(source, this.options.dark, 0);
    const root = document.documentElement;
    for (const role of roles) {
      const value = (scheme as unknown as Record<string, number>)[role];
      if (typeof value === 'number') root.style.setProperty(`--md-sys-color-${role.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`, hexFromArgb(value));
    }
    root.dataset.theme = this.options.dark ? 'dark' : 'light';
    root.style.colorScheme = this.options.dark ? 'dark' : 'light';
    root.style.setProperty('--seed-hue', String(source.hue));
  }

  static readonly swatches = hardware;
}

export const monet = new MonetEngine();
