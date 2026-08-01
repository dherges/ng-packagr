import { NgtscProgram, type AngularCompilerOptions, createCompilerHost } from '@angular/compiler-cli';
import * as ts from 'typescript';

export interface TypeGeneratorOptions {
  entryPoints: string[];
  tsConfigPath?: string;
  outDir: string;
}

export async function generateTypeDefinitions(opts: TypeGeneratorOptions): Promise<void> {
  console.log('🚀 Running Angular Compiler for type definitions (.d.ts)...');

  // Compiler options for APF
  const baseOptions: AngularCompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    declaration: true,            
    emitDeclarationOnly: true, // Generate .d.ts only
    outDir: opts.outDir,
    skipLibCheck: true,
  };

  // Create Typescript host and Angular host - the latter wraps the first one
  const tsHost = ts.createCompilerHost(baseOptions);
  const ngHost = createCompilerHost({ options: baseOptions, tsHost });

  // NgtscProgram
  const program = new NgtscProgram(opts.entryPoints, baseOptions, ngHost);

  // Run the Angular compiler
  const emitResult = program.emit();

  // Extract errors and diagnostics
  const diagnostics = ts.getPreEmitDiagnostics(program.getTsProgram()).concat(emitResult.diagnostics);
  
  if (diagnostics.length > 0) {
    const formatHost: ts.FormatDiagnosticsHost = {
      getCanonicalFileName: (path) => path,
      getCurrentDirectory: ts.sys.getCurrentDirectory,
      getNewLine: () => ts.sys.newLine,
    };
    const message = ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost);
    throw new Error(`TypeScript/Angular Compiler Fehler:\n${message}`);
  }

  console.log(`✅ Type definitions written to "${opts.outDir}".`);
}
