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
-- toggle show hidden characters
noremap('n', '<leader>$', function()
    vim.o.list = not vim.o.list
end)
-- turn off search highlight
noremap('n', '<leader> ', vim.cmd.nohlsearch)

-- cursor movement
-- 15 lines is about where the text moves and I can still see what's going on
noremap('n', '<C-d>', '15j')     -- bukl move down  
noremap('n', '<C-u>', '15k')     -- bulk move up  
noremap('n', 'n', 'nzz')         -- move to next match and center
noremap('n', 'N', 'nzz')         -- move to previous match and center

-- line movement (note: the : cannot be replaced by <cmd>)
noremap('v', '<A-j>', [[:m '>+1<cr>gv=gv]]) -- move selection down
noremap('v', '<A-k>', [[:m '<-2<cr>gv=gv]]) -- move selection up

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

-- copy to system clipboard (commented out because it doesn't work over ssh)
-- workaround is sending the text over websocket to the host
-- noremap({ 'n', 'v' }, '<leader>y', '"+y')
-- save yanked text to host
-- for host windows machine, this uses powershell set-clipboard
-- for vm ssh session, this uses websocat and a websocket server running on the host machine
vim.cmd([[
if has("win32")
    augroup YankToScript
      autocmd!
      autocmd TextYankPost * if v:register == '+' | call writefile([getreg('+')], $HOME .. '/.vim/yank') | silent! execute '!(Get-Content $env:USERPROFILE/.vim/yank) -replace "`0","`n" | set-clipboard' | redraw! | endif
    augroup END
else
    augroup YankToScript
      autocmd!
      autocmd TextYankPost * if v:register == '+' | call writefile([getreg('+')], '/tmp/yank') | silent! execute '!bash -c "source ~/.bashrc && cat /tmp/yank | websocat -1 -t -u ws://$HOST_MACHINE_IP:8881"' | redraw! | endif
    augroup END
endif
]])

noremap('v', '<leader>y', '"+y')

-- swap left and right buffers
noremap('n', '<leader>w', '<cmd>NvimTreeClose<cr><C-w>r<cmd>NvimTreeOpen<cr><C-W>l')
