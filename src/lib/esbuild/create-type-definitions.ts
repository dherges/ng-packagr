import { ParsedConfiguration } from '@angular/compiler-cli';

export interface CreateTypeDefOptions {
  parsedConfiguration: ParsedConfiguration;
  tmpTypesDir: string;
  flatModuleFile: string;
}

export async function createRawTypeDefinitions(options: CreateTypeDefOptions): Promise<void> {
  const { parsedConfiguration, tmpTypesDir, flatModuleFile } = options;

  const { NgtscProgram, createCompilerHost } = await import('@angular/compiler-cli');

  const angularDtsOptions = {
    ...parsedConfiguration.options,
    declaration: true,
    emitDeclarationOnly: true,
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

  await angularDtsProgram.compiler.analyzeAsync();
  angularDtsProgram.compiler.prepareEmit();
  angularDtsProgram.getTsProgram().emit(undefined, undefined, undefined, true);
}
