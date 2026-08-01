import { ParsedConfiguration } from '@angular/compiler-cli';

export interface CreateTypeDefOptions {
  parsedConfiguration: ParsedConfiguration;
  tmpTypesDir: string;
  flatModuleFile: string;
}

export async function createRawTypeDefinitions(options: CreateTypeDefOptions): Promise<void> {
  const { parsedConfiguration, tmpTypesDir, flatModuleFile } = options;
  
  // Dynamischer Import des echten Angular-Compilers
  const { NgtscProgram, createCompilerHost } = await import('@angular/compiler-cli');

  const angularDtsOptions = {
    ...parsedConfiguration.options,
    declaration: true,
    emitDeclarationOnly: true, // Garantiert reinen Typen-Auswurf
    declarationDir: tmpTypesDir,
    outDir: tmpTypesDir,
    flatModuleOutFile: `${flatModuleFile}.js`,
    flatModuleId: parsedConfiguration.options.flatModuleId,
  };

  const dtsCompilerHost = createCompilerHost({ options: angularDtsOptions as any });
  
  const angularDtsProgram = new NgtscProgram(
    parsedConfiguration.rootNames,
    angularDtsOptions as any,
    dtsCompilerHost
  );

  // Asynchrone Analyse (Templates/Styles) durchführen
  await angularDtsProgram.compiler.analyzeAsync();
  
  // Modul-Flachwalzung vorbereiten
  angularDtsProgram.compiler.prepareEmit();
  
  // Reine d.ts-Dateien in den temporären Ordner schreiben
  angularDtsProgram.getTsProgram().emit(undefined, undefined, undefined, true);
}
