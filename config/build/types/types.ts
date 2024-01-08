import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export interface BuildPaths {
    entry: string;
    html:  string;
    public: string;
    output: string;
    src:string;
}

export type buildmode = 'production' | 'development';

export interface buildoptions {
  port: number;
  path: BuildPaths;
  mode: buildmode;
}


export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
    port:number;
    paths:BuildPaths;
    mode:BuildMode;
    platform:BuildPlatform;
    analyzer?: boolean;
}