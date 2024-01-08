import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port ?? 3000,
        open:true,
        historyApiFallback: true,//-рабготает только для devServer,если раздавать статику через ngix То надо проксироваание на Index.html
        hot:true
        //HOT - HOT MODULE REPLACEMENT - ПОЗВОЛЯЕТ ОБНОВТЬ КОД БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ
    }
}