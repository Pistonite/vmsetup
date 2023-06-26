local mark = require('harpoon.mark')
vim.keymap.set('n', '<leader>A', mark.add_file, { noremap = true })

local ui = require('harpoon.ui')
vim.keymap.set('n', '<leader>s', ui.toggle_quick_menu, { noremap = true })

-- buffer movement
vim.keymap.set('n', '<leader><tab>', ui.nav_next, { noremap = true })
vim.keymap.set('n', '<leader><S-tab>', ui.nav_prev, { noremap = true })

