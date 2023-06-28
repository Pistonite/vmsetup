-- disable nvim builtin file explorer
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1
-- load plugins
require('plugins')
-- load key mappings and options
require('keys')
require('opts')

