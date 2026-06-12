import { Module as Mod } from 'vuex';
import { DynamicModuleOptions, ModuleOptions } from '../moduleoptions';
export declare function registerDynamicModule<S>(dynamicModule: Mod<S, any>, modOpt: DynamicModuleOptions): void;
export declare function Module<S>(module: Function & Mod<S, any>): void;
export declare function Module<S>(options: ModuleOptions): ClassDecorator;
