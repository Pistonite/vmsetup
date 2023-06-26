-- KEYS
-- helper for remapping
local function noremap(mode, lhs, rhs, opts)
    local options = { noremap = true }
    if opts then
        options = vim.tbl_extend('force', options, opts)
    end
    vim.keymap.set(mode, lhs, rhs, options)
end
-- toggle relative line number
noremap('n', '<leader>0', function()
    vim.o.relativenumber = not vim.o.relativenumber
end)
-- turn off search highlight
noremap('n', '<leader> ', vim.cmd.nohlsearch)

-- cursor movement
noremap('n', '<C-d>', '<C-d>zz') -- move down half screen and center
noremap('n', '<C-u>', '<C-u>zz') -- move up half screen and center
noremap('n', 'n', 'nzz')         -- move to next match and center
noremap('n', 'N', 'nzz')         -- move to previous match and center

-- line movement (note: the : cannot be replaced by <cmd>)
noremap('v', '<A-j>', [[:m '>+1<cr>gv=gv]]) -- move selection down
noremap('v', '<A-k>', [[:m '<-2<cr>gv=gv]]) -- move selection up

-- copy to system clipboard (commented out because it doesn't work over ssh)
-- noremap({ 'n', 'v' }, '<leader>y', '"+y')
-- code action menu
noremap({ 'n', 'v' }, '<leader>a', vim.cmd.CodeActionMenu)

-- what
noremap('n', 'q', '<nop>')
noremap('n', 'Q', '<nop>')

-- change window size
noremap('n', '<C-w>>', '<C-w>20>')
noremap('n', '<C-w><', '<C-w>20<')
noremap('n', '<C-w>+', '<C-w>10+')
noremap('n', '<C-w>-', '<C-w>10-')
