import { PluginItem } from "@babel/core";

export function removeDataTestIdBabelPlugin():PluginItem {
        return {
            visitor: {
               Program(path, state) {
                    const forbiddenProps = state.opts.props || [];//достаем плангины которые будем передавать(в этом случае запрещенные пропсы)


                    path.traverse({//-здесь будем искать нужную ноду и обрабатывать её
                        JSXIdentifier(current) {
                         const nodeName = current.node.name;
                            if(forbiddenProps.includes(nodeName)) {
                                current.parentPath.remove();
                            }
                        }
                    })
               }
            }
        }
}