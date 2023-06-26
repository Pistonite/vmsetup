-- open terminal
vim.keymap.set('n', [[<leader><C-\>]], vim.cmd.terminal)
-- back to normal mode with Ctrl-w
vim.keymap.set('t', '<C-w>', [[<C-\><C-n>]])
-- open float terminal (Ctrl-D to close)
vim.keymap.set('n', [[<C-\>]], vim.cmd.FloatermToggle)
