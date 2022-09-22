#!/bin/bash
# 
echo "Fixing Nollup. Check https://github.com/PepsRyuu/nollup/issues/239"
sed -i 's/.*let hr = plugin.execute\[hook].apply.*/let hr = typeof(plugin.execute\[hook\])==\"function\" ? plugin.execute\[hook\].apply(plugin.context, args) : plugin.execute\[hook\].handler.apply(plugin.context, args);/' node_modules/nollup/lib/impl/PluginLifecycle.js