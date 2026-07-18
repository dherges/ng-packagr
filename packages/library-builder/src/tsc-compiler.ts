import { NgtscProgram, type AngularCompilerOptions } from '@angular/compiler-cli';
import * as ts from 'typescript';

export interface TypeGeneratorOptions {
  entryPoints: string[];
  tsConfigPath?: string;
  outDir: string;
}

export async function generateTypeDefinitions(opts: TypeGeneratorOptions): Promise<void> {
  // Standard-Compileroptions für APF definieren
  const baseOptions: AngularCompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ES2022,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    declaration: true,            
    emitDeclarationOnly: true,    // Nur .d.ts erzeugen
    outDir: opts.outDir,
    skipLibCheck: true,
  };

  console.log('🚀 Starte Angular Compiler für Typdefinitionen (.d.ts)...');

  // NgtscProgram instanziieren statt createProgram
  const program = new NgtscProgram(opts.entryPoints, baseOptions);

  // Führe den Compiler-Emit aus
  const emitResult = program.emit();

  // Fehler/Diagnostics auswerten
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

  console.log(`✅ Typdefinitionen erfolgreich nach "${opts.outDir}" geschrieben.`);
}
